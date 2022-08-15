//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click
const button = document.querySelector("#btnToClick");
button.innerHTML ="Click";
button.addEventListener("click",(e)=>{
    console.log(e)
});

/*const click = document.querySelector(".click");
click.addEventListener("click", (click) => {
    console.log(click)
})*//*No entiendo esta parte del ejercicio, o sea, tengo que atacar al input con class="click"? O al boton?*/
 

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focus = document.querySelector(".focus")
focus.addEventListener("focus",(ver) => {
    console.log(ver)
})


//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/
const value = document.querySelector(".value")
value.addEventListener("input", (escribir) => {
    console.log(escribir)
})

