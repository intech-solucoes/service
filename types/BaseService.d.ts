import { TipoRequisicao, TipoResposta } from ".";
export declare class BaseService {
    private controller;
    constructor(controller: string);
    private GetToken;
    VerificarAdmin(): Promise<import("axios").AxiosResponse<any>>;
    CriarRequisicaoPorUrl<T>(tipoRequisicao: TipoRequisicao, url: string, data?: any, tipoResposta?: TipoResposta): Promise<T>;
    CriarRequisicao<T>(tipoRequisicao: TipoRequisicao, versao?: string | null, rota?: string | null, data?: any | null, tipoResposta?: TipoResposta): Promise<T>;
}
