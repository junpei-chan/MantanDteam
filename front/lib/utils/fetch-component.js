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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchComponent = FetchComponent;
function FetchComponent(containerId, htmlPath, targetElementId) {
    return __awaiter(this, void 0, void 0, function* () {
        const container = document.getElementById(containerId);
        const res = yield fetch(htmlPath);
        const html = yield res.text();
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const targetElement = tempDiv.querySelector(`#${targetElementId}`);
        if (targetElement && container) {
            container.innerHTML = targetElement.outerHTML;
        }
        const tempDoc = document.implementation.createHTMLDocument();
        tempDoc.documentElement.innerHTML = html;
        const links = tempDoc.head.querySelectorAll('link[rel="stylesheet"]');
        links.forEach(link => {
            const linkElement = link;
            if (!document.querySelector(`link[href="${linkElement.href}"]`)) {
                const newLink = document.createElement("link");
                newLink.rel = "stylesheet";
                newLink.href = linkElement.href;
                document.head.appendChild(newLink);
            }
        });
        const scripts = tempDoc.head.querySelectorAll('script[src]');
        scripts.forEach(script => {
            const scriptElement = script;
            if (!document.querySelector(`script[src="${scriptElement.src}"]`)) {
                const newScript = document.createElement("script");
                newScript.src = scriptElement.src;
                newScript.defer = scriptElement.defer;
                document.body.appendChild(newScript);
            }
        });
    });
}
