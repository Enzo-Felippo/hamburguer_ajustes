const abrirModal = document.querySelector("#carrinho");
const fecharModal = document.querySelector("#fechar_modal");
const continuarComprando = document.querySelector("#fechar");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () =>{
    modal.classList.toggle("hide");
    fade.classList.toggle("hide")
}

[abrirModal,fecharModal,continuarComprando].forEach((el)=>{
    el.addEventListener("click",()=>toggleModal());
});




