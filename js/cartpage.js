const tablebody = document.querySelector(".tbody"),
    ClothesName = JSON.parse(sessionStorage.getItem("clothes")),
    Clothesprice = JSON.parse(sessionStorage.getItem("price")),
    inputs = document.querySelectorAll("input"),
    butn = document.querySelector(".btn");
let totalprice = 0;
// console.log(ClothesName, ClothesName.length);
// console.log(Clothesprice, Clothesprice.length);

for (let i = 0; i < ClothesName.length; i++) {
    let tr = document.createElement("tr");
    for (let k = 0; k < 1; k++) {
        switch (k) {
            case 0:
                let td1 = document.createElement("td");
                let tdtext = document.createTextNode(ClothesName[i]);
                td1.appendChild(tdtext);
                tr.appendChild(td1);
            case 1:
                let td2 = document.createElement("td");
                let input = document.createElement("input");
                input.type = "number";
                input.value = 1;
                // let tdtext2 = document.createTextNode('col2');
                td2.appendChild(input);
                tr.appendChild(td2);
            case 2:
                let td3 = document.createElement("td");
                let tdtext3 = document.createTextNode(Clothesprice[i]);
                td3.appendChild(tdtext3);
                tr.appendChild(td3);
            default:
                break;
        }
    }
    tablebody.appendChild(tr);
}

for (let p = 0; p < Clothesprice.length; p++)
    totalprice += parseInt(Clothesprice[p].slice(0, 2));

// console.log(totalprice);
/********* create price row **********/
let lasttr = document.createElement("tr");

let td1 = document.createElement("td");
td1.colSpan = 2;
let tdtext = document.createTextNode("Total : ");
td1.appendChild(tdtext);
lasttr.appendChild(td1);

let td2 = document.createElement("td");
let tdt2ext = document.createTextNode(totalprice + '$');
td2.appendChild(tdt2ext);
lasttr.appendChild(td2);

tablebody.appendChild(lasttr);
/********* end price row**********/
