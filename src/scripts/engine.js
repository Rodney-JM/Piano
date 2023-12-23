const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlides = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio('src/tunes/a.wav')

const playTune = (key)=>{
  audio.src = `src/tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`)//pega o elemento que foi clicado
  clickedKey.classList.add("active")
  setTimeout(()=>{
    clickedKey.classList.remove("active")
  }, 150); //adiciona e remove uma classe a cada 150 milisegundos
};

pianoKeys.forEach((key)=>{
  key.addEventListener("click", ()=> playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);

})
//data-set= representa valores do próprio HTML

//deixa que somente as teclas mapeadas serem executadas
document.addEventListener("keydown", (e)=>{
  if(mapedKeys.includes(e.key)){ //o includes verifica se o e.key esta dentro do mapedKeys
    /* KEYDOWN=> Teclado event */
    playTune(e.key)
  };// da playy no audio mesmo que o user apenas tecle
})

const handleVolume = (e)=>{
  audio.volume = e.target.value; //Define que o valor do evento recebido, ou seja, o input, seja igual ao volume do audio
}
const showHideKeys = ()=>{
  pianoKeys.forEach(key=>key.classList.toggle("hide")); //diferente do classlist.add, o toggle adiciona se nao tiver e remove se tiver a classe especificada
}

volumeSlides.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys)