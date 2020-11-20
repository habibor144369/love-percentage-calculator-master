let form = document.querySelector("#form");
let main = document.querySelector("#main");
let Yname = document.querySelector("#Yname");
let Pname = document.querySelector("#Pname");
let submit = document.querySelector("#submit");
let clear = document.querySelector("#clear");
let result = document.querySelector("#result");
let cong = document.querySelector("#cong");
let mes = document.querySelector("#mes");

let remove = document.querySelector("#remove");

form.addEventListener("submit", function (e) {
    e.preventDefault();
})

submit.addEventListener("click", function () {

    if (Yname.value === '' && Pname.value == '') {
        alertMessage("Please Your Name & Your Partner Name!")
    } else if (Yname.value === '') {
        alertMessage("Please Enter Your Name!")
    } else if (Yname.value.length <= 3 ) {
        alertMessage(" invalid your name!")
    } else if ( Pname.value.length <= 3 ) {
        alertMessage("invalid your partner name!")
    }else if (Pname.value === '') {
        alertMessage("Please Enter Your Partner's Name!")
    } else if (Yname.value === "I don't know" || Yname.value === "I don't know " || Yname.value === "janina" || Yname.value === "bal" || Yname.value === "unkown" || Yname.value === "Unkown" || Pname.value === "I don't know" || Pname.value === "I don't know " || Pname.value === "janina" || Pname.value === "bal" || Pname.value === "unkown" || Pname.value === "Unkown") {
        alertMessage("please valid name!")
    } else {

        document.querySelector("#loading").style.transform = "scale(1)";
        document.querySelector("#result").style.transform = "scale(0)";

        setTimeout(() => {
            document.querySelector("#loading").style.transform = "scale(0)";
            document.querySelector("#result").style.transform = "scale(1)";
        }, 500);

        let random = Math.floor(Math.random() * 100 + 1);
        cong.append("Congratulations " + Yname.value + ",");
        mes.append(Yname.value + " + " + Pname.value + " = " + random + "%"); 

        Yname.value = '';
        Pname.value = '';

    }

})

remove.addEventListener("click", function(clearResult){
    document.querySelector("#result").style.transform = "scale(0)";
    cong.innerHTML=''; 
    mes.innerHTML=''; 
})

////// For alert div
function alertMessage(text) {
    let alert = document.createElement("div");
    alert.id = 'alert';
    alert.style.position = 'absolute';
    alert.style.top = '-30px';
    main.prepend(alert)
    setTimeout(() => {
        document.querySelector("#alert").remove();
    }, 1500);
    alert.innerText = text;
}

clear.addEventListener("click", function (e) {
    Yname.value = '';
    Pname.value = '';
})