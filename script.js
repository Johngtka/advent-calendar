var data1 = [];
var data = [];
var myVar;
var myvar1;
czytaj().then((d) => data = d);
async function czytaj() {
    return await (await fetch("tt.json")).json();
}
function blok() {
    // const blokowanie = document.getElementsById("d");
    // blokowanie.setAttribute("onclick", ";");
}
// funkcja obsługująca wyświetlanie tekstu w odpowiednim miejscu wraz z obsługą loadera
function kalendar() {
    const tekst = document.getElementById("test");
    tekst.classList.add("tekst");
    if (data1.length == 0) data1 = data;
    // console.log(data1);
    var index = Math.floor(Math.random() * data1.length);
    var t = document.getElementById("test");
    t.innerHTML = '<p>' + data1[index] + '</p>';
    data1.splice(index, 1);
    const d = document.getElementById("mydiv");
    d.classList.remove("hide");
    document.getElementById("loader").style.display = "block";
    myVar = setTimeout(showpage, 3000);
    myvar1 = setTimeout(hide, 10000);
    jQuery(function ($) {
        $.scrollTo(0);
        $('.day').click(function () {
            $.scrollTo($('#t'), 2000);
        });
    });
    // jQuery(function ($) {
    //     $.scrollTo(0);
    //     $('#back').click(function () {
    //         $.scrollTo($('#up'), 2000);
    //     });
    // });
    // blok();
}
// funkcja ospowiednio pokazująca oraz ukrywająca loader oraz tekst
function showpage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("mydiv").style.display = "block";
}
function hide() {
    const krycie = document.getElementById("test");
    krycie.classList.add("hidden");
    krycie.addEventListener('transitionend', () => {
        krycie.remove();
    });
}
// funkcja pobierająca datę (Rok i zapisaną w tablicę nazwę miesiąca na sztywno "Grudzień")
function time() {
    // zmienna year ospowiada za przechowywanie obiektu klasy Date
    var year = new Date();
    // zmienna rok odpowiada za przechowywanie funkcji obiektu Date który pobiera pełny Rok
    var rok = year.getFullYear();
    // wyrażenie year1 ściąga do skryptu element o podanym id
    const year1 = document.getElementById("date");
    // przypisanie do wyrażenia year1 zmiennej rok która zawiera fukcje obiektu Date i 2x<br>
    year1.innerHTML = rok;
    // przypisanie wyrażeniu  year1 klasy która definiuje wygląd tego elementu wpisanego w lini 52
    year1.classList.add("rok");
    // w zmiennej monthArray znajduje się tablica z przypisaną na sztywno wartoscią Grudzień
    let monthArray = ['Grudzień'];
    // przypisaniu wyrażeniu msc elementu o id msc
    const msc = document.getElementById("msc");
    // włożenie do wyrażenia msc tablicy monthArray z indexem 0 i :
    msc.innerHTML = monthArray[0] + ":";
    // console.log(monthArray[0]);
}
// 
var day = new Array(31);
day[0] = 1;
day[1] = 2;
day[2] = 3;
day[3] = 4;
day[4] = 5;
day[5] = 6;
day[6] = 7;
day[7] = 8;
day[8] = 9;
day[9] = 10;
day[10] = 11;
day[11] = 12;
day[12] = 13;
day[13] = 14;
day[14] = 15;
day[15] = 16;
day[16] = 17;
day[17] = 18;
day[18] = 19;
day[19] = 20;
day[20] = 21;
day[21] = 22;
day[22] = 23;
day[23] = 24;
day[24] = 25;
day[25] = 26;
day[26] = 27;
day[27] = 28;
day[28] = 29;
day[29] = 30;
day[30] = 31;

window.onload = kalendarz;
function kalendarz() {
    var numer = "";
    for (i = 0; i <= 30; i++) {
        numer += '<a href="#" class="day"><div onclick="kalendar()" class="dzien"><p>' + day[i] + '</p></div></a>';
        if ((i + 1) % 7 == 0) {
            numer = numer + '<div style="clear: both"></div>';
        }
    }
    document.getElementById("main").innerHTML = numer;
    time();
}
