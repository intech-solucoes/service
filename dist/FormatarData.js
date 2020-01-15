"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FormatarData(data) {
    return data.replace(new RegExp('/', 'g'), '.');
}
exports.FormatarData = FormatarData;
