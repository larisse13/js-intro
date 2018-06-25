var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

tdImc = paciente.querySelector(".info-imc");

var pesovalido = true;
var alturavalida = true;

if (peso <= 0 || peso >= 1000) {
  console.log("Peso inválido");
  pesovalido = false;
  tdImc.textContent = "Peso inválido";
}

if(altura <= 0 || altura >= 3){
  console.log("Altura inválida");
  alturavalida = false;
  tdImc.textContent = "Altura inválida";
}

if(pesovalido && alturavalida){
  var imc = peso/(altura*altura);
  tdImc.textContent = imc;  
}





