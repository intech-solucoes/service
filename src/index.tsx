export { BaseService } from "./BaseService";
export { Session } from "./Session";

export enum TipoRequisicao {
    GET = "GET",
    POST = "POST"
}

export enum TipoResposta {
    Default,
    Blob,
    Zip
}