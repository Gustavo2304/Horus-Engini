// Script CLÁSSICO (não é módulo) de propósito: roda mesmo quando os módulos ES não carregam
// (abrir com duplo clique, servidor com tipo MIME errado, pastas js/ ou css/ ausentes) e
// mostra na tela o motivo provável, em vez de deixar a página parecendo "quebrada".
// O js/main.js marca window.__logAnalyzerReady = true quando a aplicação inicia.
(function () {
  window.addEventListener("load", function () {
    setTimeout(function () {
      if (window.__logAnalyzerReady) return;
      var box = document.getElementById("boot-error");
      if (box) box.hidden = false;
    }, 800);
  });
})();
