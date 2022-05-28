// Main Textarea
let inputText = document.getElementById("dizi");

// Dizi
let dizi = [];
let sortedList = [];
let fekansTablosu = [];

// Test Data
// inputText.value = "1.5 1.5 2.6 2.6 3.4 3.8 3.8 4.1 4.1 4.6 4.6 4.6 5.2 5.2";
// inputText.value =
//   "2 3 3 4 5 6 7 8 9 4 5 7 8 9 10 25 32 5 7 8 4 6 3 2 1 4 5 8 7 9 6 5 2 1 4";
// inputText.value =
//   "81 168 224 364 464 586 643 854 1080 1520 89 170 226 367 544 592 801 921 1100 1850 116 192 249 424 548 601 831 940 1130 1850 130 203 345 456 557 623 842 1020 1350 2030";
// dizi = inputText.value.split(" ").map((x) => Number(x));
// if (dizi[dizi.length - 1] == "") {
//   dizi.pop();
// }
// VerilerSiralama();
// frekansSeriHesaplama();
// calculateAvarage();
// calcMedian();
// ModHesaplama();
// frekansTablosuHesaplama();
// standartSapmaHesaplama();
// ortalamaMutlakSapma();
// Q1Hesaplama();
// Q3Hesaplama();
// m3Hesaplama();
// m4Hesaplama();
// DKHesaplama();
//End of test Data

// Ham Veriler Input Olay
inputText.addEventListener("input", () => {
  // inputText.value = inputText.value.trim();
  dizi = inputText.value.split(" ").map((x) => Number(x));
  if (dizi[dizi.length - 1] == "") {
    dizi.pop();
  }
  VerilerSiralama();
  frekansSeriHesaplama();
  calculateAvarage();
  calcMedian();
  ModHesaplama();
  frekansTablosuHesaplama();
  standartSapmaHesaplama();
  ortalamaMutlakSapma();
  Q1Hesaplama();
  Q3Hesaplama();
  m3Hesaplama();
  m4Hesaplama();
  DKHesaplama();
});

//Girilen Verileri Sıralama
function VerilerSiralama() {
  sortedList = [...dizi];
  sortedList = sortedList.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("sortedList").innerHTML =
    "{ " + sortedList.join(", ") + " }";
}

// Frekans Seri Hesaplama
function frekansSeriHesaplama() {
  // frekans Hesaplama
  var occurrences = {};
  for (var i = 0, j = dizi.length; i < j; i++) {
    occurrences[dizi[i]] = (occurrences[dizi[i]] || 0) + 1;
  }

  // Print frequency data in the table
  let frekanseSeriTablosu = document.getElementById("frekansSeriTablosu");
  let tableBody = frekanseSeriTablosu.getElementsByTagName("tbody")[0];
  // Clear Table Data first
  tableBody.innerHTML = "";
  for (const key in occurrences) {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = key;
    cell2.innerHTML = occurrences[key];
  }
}

// Basit Ornekleme Secme
function basitOrneklemeSecme(sayi) {
  let orneklemeSonuc = document.getElementById("basitOrneklemeSonuc");
  // Clear previos Samples
  orneklemeSonuc.innerHTML = "";
  // check if number of samples is less than orginial Data
  let min = Number(document.getElementById("basitOrneklemeInputMin").value);
  let max = Number(document.getElementById("basitOrneklemeInputMax").value);
  let n = Number(document.getElementById("basitOrneklemeInputn").value);
  let selectedSamples = [];

  // Generate Samples
  let samples = [];
  for (let i = min; i <= max; i++) {
    samples.push(i);
  }

  // Check if Min and Max are valid
  if (min > max) {
    orneklemeSonuc.innerHTML = "Min degeri Max degerinden buyuk olamaz";
    return;
  }

  // Selecting Samples
  for (let i = 0; i < n; i++) {
    let randomIndex = Math.floor(Math.random() * samples.length);
    if (n > samples.length) {
      selectedSamples.push(samples[randomIndex]);
    } else {
      if (selectedSamples.indexOf(samples[randomIndex]) == -1) {
        selectedSamples.push(samples[randomIndex]);
      } else {
        i--;
      }
    }
  }

  // Print Samples
  orneklemeSonuc.innerHTML = "{ " + selectedSamples + " }";
}

//sistematik rasgele örnekleme Secme
function sistematikRasgeleOrneklemeSecme() {
  let orneklemeSonuc = document.getElementById("sistematikOrneklemeSonuc");
  // Clear previos Samples
  orneklemeSonuc.innerHTML = "";

  let N = Number(document.getElementById("sistematikOrneklemeInputN").value);
  let n = Number(document.getElementById("sistematikOrneklemeInputn").value);

  // check if number of samples is less than orginial Data
  if (n > N) {
    orneklemeSonuc.innerHTML =
      "Örnek sayısı orijinal verilerden fazla olamaz! 😉";
    return;
  }
  let k = Math.floor(N / n);
  // get random index in range of k
  let sampleIndex = Math.floor(Math.random() * k) + 1;

  let sonuc = "{ ";
  for (let i = 0; i < n; i++) {
    let temp = sampleIndex + i * k;
    sonuc += temp + " ";
  }
  sonuc += " }";
  orneklemeSonuc.innerHTML = sonuc;
}

// Ortalama Hesaplama
function calculateAvarage() {
  let sum = 0;
  for (let i = 0; i < dizi.length; i++) {
    sum += dizi[i];
  }
  let avg = sum / dizi.length;
  let avgText = document.getElementById("ortalama");
  avgText.innerHTML = avg.toFixed(2);
  return avg;
}

// Medyan Hesaplama
function calcMedian() {
  var half = Math.floor(sortedList.length / 2);

  let medianTxt = document.getElementById("medyan");

  if (sortedList.length % 2) medianTxt.innerHTML = sortedList[half];
  else medianTxt.innerHTML = (sortedList[half - 1] + sortedList[half]) / 2.0;
}

// Mod Hesaplama
function ModHesaplama() {
  // frekans Hesaplama
  var occurrences = {};
  for (var i = 0, j = dizi.length; i < j; i++) {
    occurrences[dizi[i]] = (occurrences[dizi[i]] || 0) + 1;
  }
  // Get the most dublicated data
  let tempArr = Object.values(occurrences);
  let max = Math.max(...tempArr);

  let mod = [];
  for (const key in occurrences) {
    if (occurrences[key] == max) {
      mod.push(key);
    }
  }
  // Print the result
  let modResltText = document.getElementById("modu");
  modResltText.innerHTML = "{ " + mod + " }";
}

function frekansTablosuHesaplama() {
  // clear old data
  let frequencyTable = document.getElementById("frekansTablosuHtml");
  if (frequencyTable != null && frequencyTable != undefined) {
    let tableBody = frequencyTable.getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";
  }

  // calculate frequency data
  let R = Number(sortedList[sortedList.length - 1]) - Number(sortedList[0]);
  let K = Math.ceil(Math.sqrt(dizi.length));
  let h = Math.ceil(R / K);
  // creating frequency table object
  let classesBorder = sortedList[0];
  let acculmulatedFreq = 0;
  for (let i = 0; i < K; i++) {
    let oldClassesBorder = classesBorder;
    fekansTablosu[i] = {};
    // calculate new classes border
    if (i == K - 1) {
      classesBorder = classesBorder + 1;
    }
    if (Number.isInteger(classesBorder)) {
      fekansTablosu[i].borders =
        classesBorder + " - " + (classesBorder + h - 1);
    } else {
      fekansTablosu[i].borders =
        classesBorder + " - " + (classesBorder + h - 0.1);
    }

    classesBorder += h;

    // Calculate Class Middle point
    let classMiddlePoint;
    if (Number.isInteger(classesBorder)) {
      classMiddlePoint = (classesBorder + oldClassesBorder - 1) / 2;
    } else {
      classMiddlePoint = (classesBorder + oldClassesBorder - 0.1) / 2;
    }

    fekansTablosu[i].classMiddlePoint = classMiddlePoint;

    // calculate class boundaries
    let highClassBoundry;
    if (Number.isInteger(classesBorder)) {
      highClassBoundry = (oldClassesBorder + h + classesBorder - 1) / 2;
    } else {
      highClassBoundry = (oldClassesBorder + h + classesBorder - 0.1) / 2;
    }

    let lowClassBoundry = (highClassBoundry - h).toFixed(2);
    fekansTablosu[i].classBoundaries =
      lowClassBoundry + " - " + highClassBoundry;

    // calculate frequency
    let classFreq = 0;
    sortedList.forEach((element) => {
      if (element >= lowClassBoundry && element <= highClassBoundry) {
        classFreq++;
      }
    });
    fekansTablosu[i].freq = classFreq;

    // Calculate Rational frequency
    fekansTablosu[i].rationalFreq = classFreq + " / " + dizi.length;

    // calculate acculmulated frequency
    acculmulatedFreq += classFreq;
    fekansTablosu[i].acculmulatedFreq = acculmulatedFreq;

    // Calculate Rational acculmulated frequency
    fekansTablosu[i].rationalAcculmulatedFreq =
      acculmulatedFreq + " / " + dizi.length;
  }

  // Print frequency data in the table
  if (frequencyTable != null && frequencyTable != undefined) {
    let tableBody = frequencyTable.getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";
    for (let i = 0; i < fekansTablosu.length; i++) {
      const element = fekansTablosu[i];
      let row = tableBody.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
      let cell7 = row.insertCell(6);
      cell1.innerHTML = element.borders;
      cell2.innerHTML = element.classBoundaries;
      cell3.innerHTML = element.classMiddlePoint;
      cell4.innerHTML = element.freq;
      cell5.innerHTML = element.acculmulatedFreq;
      cell6.innerHTML = element.rationalFreq;
      cell7.innerHTML = element.rationalAcculmulatedFreq;
    }
  }
}

function standartSapmaHesaplama() {
  let standartSapma = 0;
  let ortalama = calculateAvarage();
  for (let i = 0; i < sortedList.length; i++) {
    standartSapma += Math.pow(sortedList[i] - ortalama, 2);
  }
  let Varyans = document.getElementById("Varyans");
  Varyans.innerHTML = (standartSapma / (sortedList.length - 1)).toFixed(2);
  standartSapma = Math.sqrt(standartSapma / (sortedList.length - 1));
  let standartSapmaText = document.getElementById("standartSapma");
  standartSapmaText.innerHTML = standartSapma.toFixed(2);
  return standartSapma;
}

function ortalamaMutlakSapma() {
  let ortalama = calculateAvarage();
  let mutlakSapma = 0;
  for (let i = 0; i < sortedList.length; i++) {
    mutlakSapma += Math.abs(sortedList[i] - ortalama);
  }
  let ortalamaMutlakSapma = document.getElementById("ortalamaMutlakSapma");
  ortalamaMutlakSapma.innerHTML = (mutlakSapma / sortedList.length).toFixed(2);
}

function Q1Hesaplama() {
  // Calculate h
  let R = Number(sortedList[sortedList.length - 1]) - Number(sortedList[0]);
  let K = Math.ceil(Math.sqrt(dizi.length));
  let h = Math.ceil(R / K);
  // debugger;
  let preClassFrequanciesSum = sortedList.length / 4;
  let selectedClass;
  let classFrequancySum = 0;
  let n1 = 0;
  // Search for the Q1 class
  fekansTablosu.forEach((element) => {
    classFrequancySum += element.freq;
    if (
      selectedClass == undefined &&
      classFrequancySum >= preClassFrequanciesSum
    ) {
      selectedClass = element;
      return;
    }
  });
  // console.log(selectedClass);
  // find n1 value
  for (let i = 0; i < fekansTablosu.indexOf(selectedClass); i++) {
    const element = fekansTablosu[i];
    n1 += element.freq;
  }
  let l1 = Number(selectedClass.classBoundaries.split(" ")[0]);
  let q1 = l1 + ((preClassFrequanciesSum - n1) * h) / selectedClass.freq;
  // Print Q1 value
  document.getElementById("Q1").innerHTML = q1.toFixed(2);
}

function Q3Hesaplama() {
  // Calculate h
  let R = Number(sortedList[sortedList.length - 1]) - Number(sortedList[0]);
  let K = Math.ceil(Math.sqrt(dizi.length));
  let h = Math.ceil(R / K);
  // Calculate preClassFrequanciesSum
  let preClassFrequanciesSum = (3 * sortedList.length) / 4;
  let selectedClass;
  let classFrequancySum = 0;
  let n3 = 0;
  // Search for the Q3 class
  fekansTablosu.forEach((element) => {
    classFrequancySum += element.freq;
    if (
      selectedClass == undefined &&
      classFrequancySum >= preClassFrequanciesSum
    ) {
      selectedClass = element;
      return;
    }
  });
  // find n3 value
  for (let i = 0; i < fekansTablosu.indexOf(selectedClass); i++) {
    const element = fekansTablosu[i];
    n3 += element.freq;
  }
  let l3 = Number(selectedClass.classBoundaries.split(" ")[0]);
  let q3 = l3 + ((preClassFrequanciesSum - n3) * h) / selectedClass.freq;
  // Print Q3 value
  document.getElementById("Q3").innerHTML = q3.toFixed(2);
}

function m3Hesaplama() {
  let avarage = calculateAvarage();
  let m3 = 0;
  let sum = 0;
  sortedList.forEach((element) => {
    sum += Math.pow(element - avarage, 3);
  });
  m3 = sum / (sortedList.length - 1);
  document.getElementById("M3").innerHTML = m3.toFixed(2);
}

function m4Hesaplama() {
  let avarage = calculateAvarage();
  let m4 = 0;
  let sum = 0;
  sortedList.forEach((element) => {
    sum += Math.pow(element - avarage, 4);
  });
  m4 = sum / (sortedList.length - 1);
  document.getElementById("M4").innerHTML = m4.toFixed(2);
}

function DKHesaplama() {
  let DK = document.getElementById("DK");
  DK.innerHTML = (standartSapmaHesaplama() / calculateAvarage()).toFixed(2);
}

function calculatePermutation() {
  let n = Number(document.getElementById("Pern").value);
  let r = Number(document.getElementById("PerR").value);
  if (r > n) {
    document.getElementById("permutasyon").innerHTML =
      "Please enter valid values";
    return;
  }
  if (n != 0 && r != 0) {
    let permutation = factorialize(n) / factorialize(n - r);
    document.getElementById("permutasyon").innerHTML = permutation;
  }
}

function calculateKompinasion() {
  let n = Number(document.getElementById("KomN").value);
  let r = Number(document.getElementById("KomR").value);
  if (r > n) {
    document.getElementById("kombinasyon").innerHTML =
      "Please enter valid values";
    return;
  }
  if (n != 0 && r != 0) {
    let kombinasyon = factorialize(n) / (factorialize(r) * factorialize(n - r));
    document.getElementById("kombinasyon").innerHTML = kombinasyon;
  }
}

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
