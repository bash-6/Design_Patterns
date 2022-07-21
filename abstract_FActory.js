class ProductIphone {
	constructor (modelo) {
	  this.modelo = modelo;
	}
};

class ProductIpad {
	constructor (modelo) {
	  this.modelo = modelo;
	}
}


class IphoneFactoria {
	crearProducto(modelo) {
		return new ProductIphone(modelo);
	}
}

class IpadFactoria {
	crearProducto(modelo) {
		return new ProductIpad(modelo);
	}
}

class AppleFactoria {
	constructor () {
		this.productIphone = new IphoneFactoria();
		this.productIpad = new IpadFactoria();
	}

	obtenerIphone() {
		return this.productIphone;
	}

	obtenerIpad() {
		return this.productIpad;
	}

}

const factoria = new AppleFactoria();
const iphone = factoria.obtenerIphone().crearProducto("SE");
const ipad = factoria.obtenerIpad().crearProducto("Air");

console.log(iphone);
console.log(ipad);
