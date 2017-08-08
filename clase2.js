function Mascota(color, tamano, genero, raza, nombre){
	this.color = color;
	this.tamano = tamano;
	this.genero = genero;
	this.raza = raza;
	this.nombre = nombre;


	this.comer = function(){

	}
	this.correr = function(){
		console.log("mi nombre es" + this.name)
	}
}


var Gatito = function(){
	this.contextura ='';
	this.nombre = nombre;
}

class Gatito extend Mascota{
	constructor()
	{

	}
}

var mitenns = new Gatito()
	mitenns.name = 'mittens';
	mittens.saludar();