import axios, { AxiosRequestConfig } from "axios";

var config = require("../../../../src/config.json");
var ReactNative: any;

try {
    // @ts-ignore
    ReactNative = require("react-native");
} catch {}

const apiUrl = config.apiUrl;

export enum TipoRequisicao {
    GET = "GET",
    POST = "POST"
}

export enum TipoResposta {
    Default,
    Blob,
    Zip
}

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
        var token = await this.GetToken("token-admin");

        return axios({
            method: "GET",
            url: apiUrl + "/usuario/admin",
            data: {},
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }

    public async CriarRequisicaoPorUrl(tipoRequisicao: TipoRequisicao, url: string, data?: any, tipoResposta: TipoResposta = TipoResposta.Default) : Promise<any>
    {
        var token = await this.GetToken();
        
        let options: AxiosRequestConfig = {
            method: tipoRequisicao,
            url: apiUrl + url,
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

        return result;
    }
    
    public async CriarRequisicao(tipoRequisicao: TipoRequisicao, versao?: string | null, rota?: string | null, data?: any | null, tipoResposta: TipoResposta = TipoResposta.Default): Promise<any> {
        var url = `/${this.controller}`;

        if(versao && versao !== "")
            url = `${url}/${versao}`;

        if(rota && rota !== "")
            url = `${url}/${rota}`;

        return this.CriarRequisicaoPorUrl(tipoRequisicao, url, data, tipoResposta);
    }

    public FormatarData(data: string) {
        return data.replace(new RegExp('/', 'g'), '.');
    }
}