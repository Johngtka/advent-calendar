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
        const mainElement = document.querySelector('#main')
        if (data.date.getMonth() + 1 === 12) {
            var year = data.date.getFullYear()
            var month = "Grudzień"
            document.querySelector('#date').innerHTML = year
            document.querySelector('#msc').innerHTML = month
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
            document.querySelector('#interact').style.display = "none"
            document.querySelector('#info').style.display = "none"
            mainElement.innerHTML = '<h1 style="margin:0; font-size:150px">Nie ma grudnia</h1>'
        }
    })
}
// const data1 = [];
// const data = [];
// var myVar;
// var myvar1;
// function kalendar() {
//     const tekst = document.querySelector('test')
//     tekst.classList.add("tekst")
//     if (data1.length == 0) data1 = data
//     // console.log(data1);
//     var index = Math.floor(Math.random() * data1.length)
//     tekst.innerHTML = '<p>' + data1[index] + '</p>'
//     data1.splice(index, 1)
//     const d = document.querySelector('#mydiv')
//     d.classList.remove("hide")
//     document.querySelector('#loader').style.display = "block"
//     myVar = setTimeout(showpage, 3000)
//     myvar1 = setTimeout(hide, 10000)
//     jQuery(function ($) {
//         $.scrollTo(0)
//         $('.day').click(function () {
//             $.scrollTo($('#t'), 2000)
//         })
//     })
//     jQuery(function ($) {
//         $.scrollTo(0)
//         $('#t').click(function () {
//             $.scrollTo($('#up'), 2000)
//         })
//     })
// }
// // funkcja ospowiednio pokazująca oraz ukrywająca loader oraz tekst
// function showpage() {
//     document.querySelector('#loader').style.display = "none"
//     document.querySelector('#mydiv').style.display = "block"
// }
// function hide() {
//     const krycie = document.querySelector('#test')
//     krycie.classList.add("hidden")
//     krycie.addEventListener('transitionend', () => {
//         krycie.remove()
//     })
// }