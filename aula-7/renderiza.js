let input1 = document.getElementById("urlimg1")
let input2 = document.getElementById("urlimg2")
let input3 = document.getElementById("urlimg3")
let divgaleria = document.getElementById("galeria")


function acao() {
    let img = document.createElement('img')
    img.src = input1.value
    divgaleria.appendChild(img)
    
    
}

function perdeufoco1() {
  input1.setAttribute('disabled', true)
}

function ganhoufocoinput1(){
    input1.removeAttribute('disabled', false)
}

function acao2(){
    let img = document.createElement('img')
    img.src = input2.value
    divgaleria.appendChild(img)
}

function perdeufoco2() {
    input2.setAttribute('disabled', true)
  }

  
  function ganhoufocoinput2(){
      input2.removeAttribute('disabled', false)
  }

  function acao3(){
    let img = document.createElement('img')
    img.src = input3.value
    divgaleria.appendChild(img)
  }

  function perdeufoco3() {
     input3.setAttribute('disabled', true)
  }
  
  function ganhoufocoinput3(){
      input3.removeAttribute('disabled', false)
  }