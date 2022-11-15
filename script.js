var data1 = [];
var data = [];
var myVar;
var myvar1;
czytaj().then((d) => data = d);
function kalendar() {
    const tekst = document.getElementById("test");
    tekst.classList.add("tekst");
    if (data1.length == 0) data1 = data;
    // console.log(data1);
    var index = Math.floor(Math.random() * data1.length);
    document.getElementById("test").innerHTML = '<p>' + data1[index] + '</p>' + '<a href="#" id="back">Powrót</a>';
    data1.splice(index, 1);
    const d = document.getElementById("mydiv");
    d.classList.remove("hide");
    document.getElementById("loader").style.display = "block";
    myVar = setTimeout(showpage, 3000);
    // myvar1 = setTimeout(hide, 10000);
    jQuery(function ($) {
        $.scrollTo(0);
        $('.day').click(function () {
            $.scrollTo($('#t'), 2000);
        });
    });
    jQuery(function ($) {
        $.scrollTo(0);
        $('#back').click(function () {
            $.scrollTo($('#up'), 2000);
        });
    });
}
function showpage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("mydiv").style.display = "block";
}
function hide() {
    const f = document.getElementById("mydiv");
    f.classList.add("hide");
    // f.style.display = "none";
    // document.getElementById("mydiv").style.display = "none";
    // const d = document.getElementById("k");
    // while (d.hasChildNodes()) {
    //     d.removeChild(d.firstChild);
    // }
}
async function czytaj() {
    return await (await fetch("tt.json")).json();
}
// funkcja pobierająca datę (Rok i zapisaną w tablicę nazwę miesiąca na sztywno "Grudzień")
function time() {
    // zmienna year ospowiada za przechowywanie obiektu klasy Date
    var year = new Date();
    // zmienna rok odpowiada za przechowywanie wunkcji obiektu Date który pobiera pełny Rok
    var rok = year.getFullYear();
    // wyrażenie year1 ściąga do skryptu element o podanym id
    const year1 = document.getElementById("date");
    // przypisanie do wyrażenia year1 zmiennej rok która zawiera fukcje obiektu Date i 2x<br>
    year1.innerHTML = rok + '</br></br>';
    // przypisanie wyrażeniu  year1 klasy która definiuje wygląd rego elementu wpisanego w lini 52
    year1.classList.add("rok");
    // w zmiennej monthArray znajduje się tablica z przypisaną na sztywno wartoscią Grudzień
    let monthArray = ['Grudzień'];
    // przypisaniu wyrażeniu msc elementu o id msc
    const msc = document.getElementById("msc");
    // włożenie do wyrażenia msc tablicy monthArray z indexem 0 i :
    msc.innerHTML = monthArray[0] + ":";
    // console.log(monthArray[0]);
}
