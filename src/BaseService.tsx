import axios, { AxiosRequestConfig } from "axios";
import { TipoRequisicao, TipoResposta } from ".";

var config = require("../../../../src/config.json");
var ReactNative: any;

try {
    // @ts-ignore
    ReactNative = require("react-native");
} catch {}

const apiUrl = config.apiUrl;

export class BaseService {

    private controller: string;

    constructor(controller: string) {
        this.controller = controller;
    }

    private async GetToken(key: string = "token") : Promise<string | null> {
        var token: string | null = null;

        if (typeof (localStorage) !== 'undefined')
            token = await localStorage.getItem(key);
        else {
            if (ReactNative)
                token = await ReactNative.AsyncStorage.getItem(key);
        }

        return token;
    }

    public async VerificarAdmin ()
    {
        var token = await this.GetToken(`@${config.appName}:token-admin`);

        return axios({
            method: "GET",
            url: apiUrl + "/usuario/admin",
            data: {},
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }
    
    public async CriarRequisicaoPorUrl<T>(tipoRequisicao: TipoRequisicao, url: string, data?: any, tipoResposta: TipoResposta = TipoResposta.Default) : Promise<T>
    {
        var token = await this.GetToken(`@${config.appName}:token`);
        
        let options: AxiosRequestConfig = {
            method: tipoRequisicao,
            url: config.apiUrl + url,
            data: data,
            headers: {
                "Authorization": "Bearer " + token
            }
        };

        if(tipoResposta === TipoResposta.Blob)
            options.responseType = 'blob';
        else if(tipoResposta === TipoResposta.Zip)
            options.responseType = 'arraybuffer';

        let { data: result } = await axios(options);

        return result as T;
    }
    
    public async CriarRequisicao<T>(tipoRequisicao: TipoRequisicao, versao?: string | null, rota?: string | null, data?: any | null, tipoResposta: TipoResposta = TipoResposta.Default): Promise<T> {
        var url = `/${this.controller}`;

        if(versao && versao !== "")
            url = `${url}/${versao}`;

        if(rota && rota !== "")
            url = `${url}/${rota}`;

        return this.CriarRequisicaoPorUrl<T>(tipoRequisicao, url, data, tipoResposta);
    }
}