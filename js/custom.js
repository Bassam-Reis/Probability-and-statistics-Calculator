let basitSeriCheck = document.getElementById("BasitSeri");
basitSeriCheck.addEventListener("change", function () {
  let basitSeri = document.getElementsByClassName("basitSeri-container")[0];
  if (basitSeriCheck.checked) {
    basitSeri.classList.remove("d-none");
  } else {
    basitSeri.classList.add("d-none");
  }
});

let merkeziEgilimCheck = document.getElementById("merkezEgilim");
merkeziEgilimCheck.addEventListener("change", function () {
  let merkeziEgilim = document.getElementsByClassName(
    "merkeziEgilim-container"
  )[0];
  if (merkeziEgilimCheck.checked) {
    merkeziEgilim.classList.remove("d-none");
  } else {
    merkeziEgilim.classList.add("d-none");
  }
});

let dagilimCheck = document.getElementById("dagılımEgilim");
dagilimCheck.addEventListener("change", function () {
  let dagilim = document.getElementsByClassName("dagilim-container")[0];
  if (dagilimCheck.checked) {
    dagilim.classList.remove("d-none");
  } else {
    dagilim.classList.add("d-none");
  }
});

let basitOrneklemeCheck = document.getElementById("basitOrnekleme");
basitOrneklemeCheck.addEventListener("change", function () {
  let basitOrnekleme = document.getElementsByClassName(
    "basitRasgele-container"
  )[0];
  if (basitOrneklemeCheck.checked) {
    basitOrnekleme.classList.remove("d-none");
  } else {
    basitOrnekleme.classList.add("d-none");
  }
});

let sistematikOrneklemeCheck = document.getElementById("sistematikOrnekleme");
sistematikOrneklemeCheck.addEventListener("change", function () {
  let sistematikOrnekleme = document.getElementsByClassName(
    "sistematik-container"
  )[0];
  if (sistematikOrneklemeCheck.checked) {
    sistematikOrnekleme.classList.remove("d-none");
    frekansTablosuHesaplama();
  } else {
    sistematikOrnekleme.classList.add("d-none");
  }
});

let frekansSerisiCheck = document.getElementById("frekansSeri");
frekansSerisiCheck.addEventListener("change", function () {
  let frekansSerisi = document.getElementsByClassName(
    "fekansSeri-container"
  )[0];
  if (frekansSerisiCheck.checked) {
    frekansSerisi.classList.remove("d-none");
  } else {
    frekansSerisi.classList.add("d-none");
  }
});

let frekansTablosuCheckmark = document.getElementById("frekansTablosu");
frekansTablosuCheckmark.addEventListener("change", function () {
  let frekansTablosuContainer = document.getElementsByClassName(
    "frekansTablosu-container"
  )[0];
  if (frekansTablosuCheckmark.checked) {
    frekansTablosuContainer.classList.remove("d-none");
  } else {
    frekansTablosuContainer.classList.add("d-none");
  }
});

let PermtasiyonCheckmark = document.getElementById("PermtasiyonCheckmark");
PermtasiyonCheckmark.addEventListener("change", function () {
  let PermtasiyonContainer = document.getElementsByClassName(
    "Permtasiyon-container"
  )[0];
  if (PermtasiyonCheckmark.checked) {
    PermtasiyonContainer.classList.remove("d-none");
  } else {
    PermtasiyonContainer.classList.add("d-none");
  }
});

let KombinasyonCheckmark = document.getElementById("KombinasyonCheckmark");
KombinasyonCheckmark.addEventListener("change", function () {
  let KombinasyonContainer = document.getElementsByClassName(
    "Kombinasyon-container"
  )[0];
  if (KombinasyonCheckmark.checked) {
    KombinasyonContainer.classList.remove("d-none");
  } else {
    KombinasyonContainer.classList.add("d-none");
  }
});
