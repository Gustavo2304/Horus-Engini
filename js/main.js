import { init } from "./app.js";

init();
// Avisa o js/boot-check.js de que tudo carregou (senão ele mostra o aviso de falha).
window.__logAnalyzerReady = true;
