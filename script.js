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
        if (data.date.getMonth() + 1 === 12) {
            var year = data.date.getFullYear()
            var month = "Grudzień"
            document.getElementById("msc").innerHTML = month
            document.getElementById("date").innerHTML = year
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
            document.getElementById("interact").style.display = "none"
            document.getElementById("info").style.display = "none"
            mainElement.innerHTML = '<h1 style="margin:0; font-size:150px">Nie ma grudnia</h1>'
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