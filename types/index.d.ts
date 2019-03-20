export declare enum TipoRequisicao {
    GET = "GET",
    POST = "POST"
}
export declare enum TipoResposta {
    Default = 0,
    Blob = 1,
    Zip = 2
}
export declare class BaseService {
    private controller;
    constructor(controller: string);
    private GetToken;
    VerificarAdmin(): Promise<import("axios").AxiosResponse<any>>;
    CriarRequisicaoPorUrl(tipoRequisicao: TipoRequisicao, url: string, data?: any, tipoResposta?: TipoResposta): Promise<any>;
    CriarRequisicao(tipoRequisicao: TipoRequisicao, versao?: string | null, rota?: string | null, data?: any | null, tipoResposta?: TipoResposta): Promise<any>;
    FormatarData(data: string): string;
}
