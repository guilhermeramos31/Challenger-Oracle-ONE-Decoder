let buttonCrypt = document.querySelector("#crypt");
let buttonDecrypt = document.querySelector("#decrypt");
let buttonCopy = document.querySelector("#copy");
let textArea = document.querySelector("#textArea");

buttonCrypt.addEventListener("click", (e) => {
    e.preventDefault();
    if(!textArea.value == " "){
        //text area before click
        let textCard = document.querySelector("#before");
        textCard.style.display = "none";
        let sticker = document.querySelector("#sticker");
        sticker.style.display = "none";
        //text area after click
        let after = document.querySelector("#after");
        after.style.display = "block";
        let resultCampAfter = document.querySelector(".resultCamp");
        resultCampAfter.classList.add("resultCampAfter");
        //content
        let textAreaTwo = document.querySelector(".textAfter");
        textAreaTwo.innerHTML = crypt(textArea.value);
        //button copy
        let copy = document.querySelector("#copy");
        copy.style.display = "block";
    } else {
        //text area before click
        let textCard = document.querySelector("#before");
        textCard.style.display = "block";
        let sticker = document.querySelector("#sticker");
        sticker.style.display = "block";
        let pBefore = document.querySelector(".text");
        pBefore.style.display = "block";
        //text area after click
        let resultCampAfter = document.querySelector(".resultCamp");
        resultCampAfter.classList.remove("resultCampAfter");
         //content
        let after = document.querySelector("#after");
        after.style.display = "none";
        //button copy
        let copy = document.querySelector("#copy");
        copy.style.display = "none";
   }
});
buttonDecrypt.addEventListener("click", (e) => {
    e.preventDefault();
    if(!textArea.value == " "){
        //text area before click
        let textCard = document.querySelector("#before");
        textCard.style.display = "none";
        let sticker = document.querySelector("#sticker");
        sticker.style.display = "none";
        //text area after click
        let after = document.querySelector("#after");
        after.style.display = "block";
        //content
        let textAreaTwo = document.querySelector(".textAfter");
        textAreaTwo.innerHTML = decrypt(textArea.value);
        //button copy
        let copy = document.querySelector("#copy");
        copy.style.display = "block";
    } else {
        //text area before click
        let textCard = document.querySelector("#before");
        textCard.style.display = "block";
        let sticker = document.querySelector("#sticker");
        sticker.style.display = "block";
        let pBefore = document.querySelector(".text");
        pBefore.style.display = "block";
         //content
        let after = document.querySelector("#after");
        after.style.display = "none";
        //button copy
        let copy = document.querySelector("#copy");
        copy.style.display = "none";
    }
});
buttonCopy.addEventListener("click", (e) => {
    e.preventDefault();
    //button copy
    let textAreaTwo = document.getElementById("textAreaTwo").value;
    navigator.clipboard.writeText(textAreaTwo);
});

let crypt = (variable) => {
    let e = variable.replace(/e/g,'enter');
    let i = e.replace(/i/g,'imes');
    let a = i.replace(/a/g,'ai');
    let o = a.replace(/o/g,'ober');
    return u = o.replace(/u/g,'ufat');
};
let decrypt = (variable) => {
    let enter = variable.replace(/enter/g,'e');
    let imes = enter.replace(/imes/g,'i');
    let ai = imes.replace(/ai/g,'a');
    let ober = ai.replace(/ober/g,'o');
    return ufat = ober.replace(/ufat/g,'u');
}