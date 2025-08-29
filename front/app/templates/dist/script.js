"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadHead(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(path);
        const html = yield response.text();
        // HTML文字列を一時的にDOM化
        const temp = document.createElement("div");
        temp.innerHTML = html;
        // head に追加
        Array.from(temp.children).forEach(el => {
            document.head.appendChild(el);
        });
    });
}
loadHead("/components/shared/head.html");
