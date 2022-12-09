async function load() {
    const texts = await (await fetch('texts.json')).json()
    return {
        texts,
        usedDays: localStorage.getItem('used-days') ? JSON.parse(localStorage.getItem('used-days')) : [],
        date: new Date()
    }
}

function onDayClick(options) {
    if (!this.classList.contains('disable')) {
        this.classList.add('disable')
        options.data.usedDays.push(options.day)
        localStorage.setItem('used-days', JSON.stringify(options.data.usedDays))
        alert(options.data.texts.splice(Math.round(Math.random() * options.data.texts.length), 1)[0])
    }
}

window.onload = () => {
    load().then((data) => {
        console.log(data.usedDays)
        const mainElement = document.getElementById('main')
        if (data.date.getMonth() === 11) {
            for (let i = 1; i <= 30; i++) {
                const dayElement = document.createElement('div')
                dayElement.classList.add('day')
                dayElement.classList.add('dzien')
                if (i > data.date.getDate() || data.usedDays.includes(i)) {
                    dayElement.classList.add('disable')
                } else {
                    dayElement.addEventListener('click', onDayClick.bind(dayElement, {
                        day: i,
                        data
                    }))
                }
                dayElement.innerHTML = '<p>' + i + '</p>'
                mainElement.appendChild(dayElement)
            }
        } else {
            mainElement.innerText = 'Nie ma grudnia'
        }
    })
}
// var data1 = [];
// var data = [];
// var myVar;
// var myvar1;
// czytaj().then((d) => data = d);
// async function czytaj() {
//     return await (await fetch("tt.json")).json();
// }
// // function blok() {
// //     // const blokowanie = document.getElementsById("d");
// //     // blokowanie.setAttribute("onclick", ";");
// // }
// // funkcja obsługująca wyświetlanie tekstu w odpowiednim miejscu wraz z obsługą loadera
// function kalendar() {
//     const tekst = document.getElementById("test");
//     tekst.classList.add("tekst");
//     if (data1.length == 0) data1 = data;
//     // console.log(data1);
//     var index = Math.floor(Math.random() * data1.length);
//     var t = document.getElementById("test");
//     t.innerHTML = '<p>' + data1[index] + '</p>';
//     data1.splice(index, 1);
//     const d = document.getElementById("mydiv");
//     d.classList.remove("hide");
//     document.getElementById("loader").style.display = "block";
//     myVar = setTimeout(showpage, 3000);
//     myvar1 = setTimeout(hide, 10000);
//     jQuery(function ($) {
//         $.scrollTo(0);
//         $('.day').click(function () {
//             $.scrollTo($('#t'), 2000);
//         });
//     });
//     jQuery(function ($) {
//         $.scrollTo(0);
//         $('#t').click(function () {
//             $.scrollTo($('#up'), 2000);
//         });
//     });
//     // blok();
// }
// // funkcja ospowiednio pokazująca oraz ukrywająca loader oraz tekst
// function showpage() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("mydiv").style.display = "block";
// }
// function hide() {
//     const krycie = document.getElementById("test");
//     krycie.classList.add("hidden");
//     krycie.addEventListener('transitionend', () => {
//         krycie.remove();
//     });
// }
// // funkcja pobierająca datę (Rok i zapisaną w tablicę nazwę miesiąca na sztywno "Grudzień")
// function time() {
//     // zmienna year ospowiada za przechowywanie obiektu klasy Date
//     var year = new Date();
//     // zmienna rok odpowiada za przechowywanie funkcji obiektu Date który pobiera pełny Rok
//     var rok = year.getFullYear();
//     // wyrażenie year1 ściąga do skryptu element o podanym id
//     const year1 = document.getElementById("date");
//     // przypisanie do wyrażenia year1 zmiennej rok która zawiera fukcje obiektu Date i 2x<br>
//     year1.innerHTML = rok;
//     // przypisanie wyrażeniu  year1 klasy która definiuje wygląd tego elementu wpisanego w lini 52
//     year1.classList.add("rok");
//     // w zmiennej monthArray znajduje się tablica z przypisaną na sztywno wartoscią Grudzień
//     let monthArray = ['Grudzień'];
//     // przypisaniu wyrażeniu msc elementu o id msc
//     const msc = document.getElementById("msc");
//     // włożenie do wyrażenia msc tablicy monthArray z indexem 0 i :
//     msc.innerHTML = monthArray[0] + ":";
//     // console.log(monthArray[0]);
// }
// //

// window.onload = kalendarz;
// function kalendarz() {
//     var numer = "";
//     for (i = 0; i <= 30; i++) {
//         numer += '<a href="#" class="day"><div onclick="kalendar()" class="dzien"><p>' + i + 1 + '</p></div></a>';
//         if ((i + 1) % 7 == 0) {
//             numer += '<div style="clear: both"></div>';
//         }
//     }
//     document.getElementById("main").innerHTML = numer;
//     time();
// }