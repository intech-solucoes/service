"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseService_1 = require("./BaseService");
exports.BaseService = BaseService_1.BaseService;
var Session_1 = require("./Session");
exports.Session = Session_1.Session;
var FormatarData_1 = require("./FormatarData");
exports.FormatarData = FormatarData_1.FormatarData;
var TipoRequisicao;
(function (TipoRequisicao) {
    TipoRequisicao["GET"] = "GET";
    TipoRequisicao["POST"] = "POST";
})(TipoRequisicao = exports.TipoRequisicao || (exports.TipoRequisicao = {}));
var TipoResposta;
(function (TipoResposta) {
    TipoResposta[TipoResposta["Default"] = 0] = "Default";
    TipoResposta[TipoResposta["Blob"] = 1] = "Blob";
    TipoResposta[TipoResposta["Zip"] = 2] = "Zip";
})(TipoResposta = exports.TipoResposta || (exports.TipoResposta = {}));
