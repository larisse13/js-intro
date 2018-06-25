var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i ++){
  
  var paciente = pacientes[i];
  
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
    paciente.classList.add("paciente-invalido");
  }

  if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");
    alturavalida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if(pesovalido && alturavalida){
    var imc = peso/(altura*altura);
    tdImc.textContent = imc.toFixed(2);  
  }
  
  
}








