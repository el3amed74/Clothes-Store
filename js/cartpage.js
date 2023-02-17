const tablebody = document.querySelector(".tbody"),
    ClothesName = JSON.parse(sessionStorage.getItem("clothes")),
    Clothesprice = JSON.parse(sessionStorage.getItem("price")),
    container = document.querySelector(".container"),
    buybtn = document.querySelector(".btn");
let totalprice = 0;

for (let i = 0; i < ClothesName.length; i++) {
    let tr = document.createElement("tr");
    for (let k = 0; k < 1; k++) {
        switch (k) {
            case 0:
                let td1 = document.createElement("td");
                td1.classList.add("w-75");
                let tdtext = document.createTextNode(ClothesName[i]);
                td1.appendChild(tdtext);
                tr.appendChild(td1);
            case 1:
                let td3 = document.createElement("td");
                let tdtext3 = document.createTextNode(Clothesprice[i]);
                td3.appendChild(tdtext3);
                tr.appendChild(td3);

            case 2:
                let removebtn = document.createElement("td");
                removebtn.classList.add("remove");
                let btntxt = document.createTextNode(" X ");
                removebtn.appendChild(btntxt);
                tr.appendChild(removebtn);

                removebtn.addEventListener("click", () => {
                    tr.classList.add("d-none");
                    let index = Clothesprice.indexOf(Clothesprice[i]);
                    Clothesprice.splice(index, 1);
                })
            default:
                break;
        }
    }
    tablebody.appendChild(tr);
}

/********* create price row **********/
let removebtns = document.querySelectorAll(".remove");
buybtn.addEventListener("click", () => {

    for (let p = 0; p < Clothesprice.length; p++) {
        totalprice += parseInt(Clothesprice[p].slice(0, 2));
    }

    buybtn.classList.add("d-none");
    removebtns.forEach(rbtn => {
        rbtn.classList.add("d-none");
    })
    let pricecontainer = document.createElement("div");
    pricecontainer.classList.add("price");

    let pricebox = document.createElement("div");
    let tdtext = document.createTextNode("Total price : ");
    pricebox.appendChild(tdtext);
    let tdtext2 = document.createTextNode(totalprice + '$');
    pricebox.appendChild(tdtext2);
    pricebox.classList.add("totalprice");
    pricecontainer.appendChild(pricebox);

    container.appendChild(pricecontainer);

});


/********* end price row**********/
