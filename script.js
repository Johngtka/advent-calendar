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
    document.getElementById("test").innerHTML = '<p>' + data1[index] + '</p>';
    data1.splice(index, 1);
    const d = document.getElementById("mydiv");
    d.classList.remove("hide");
    document.getElementById("loader").style.display = "block";
    myVar = setTimeout(showpage, 3000);
    // myvar1 = setTimeout(hide, 10000);
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
function time() {
    var year = new Date();
    var rok = year.getFullYear();
    let monthArray = ['Grudzień'];
    const year1 = document.getElementById("date");
    year1.innerHTML = rok + '</br></br>';
    year1.classList.add("rok");
    const msc = document.getElementById("msc");
    msc.innerHTML = monthArray[0] + ":";
    // console.log(monthArray[0]);
}
