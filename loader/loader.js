var sayfa;

function Yukleme(hiz) {
  sayfa = setTimeout(showPage, hiz); /* Yüklenme hızını buradan ayarlayabilirsiniz. */
}

function showPage() {
  document.getElementById("yukleniyor").style.display = "none";
  document.getElementById("icerikler").style.display = "contents";
}
