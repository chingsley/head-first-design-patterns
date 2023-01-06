export class Pizza {
  constructor() {

  }

  prepare() {
    console.log('preparing the pizza...');
  }
  bake() {
    console.log('baking the pizza...');
  }
  cut() {
    console.log('cutting the pizza...');
  }
  box() {
    console.log('boxing the pizza...');
  }
}

export class CheesePizza extends Pizza {
  pizza: Pizza | null;
  constructor() {
    super();
    this.pizza = new Pizza();
  }

}

export class PepperoniPizza extends Pizza {
  pizza: Pizza | null;
  constructor() {
    super();
    this.pizza = new Pizza();
  }

}

export class ClamPizza extends Pizza {
  pizza: Pizza | null;
  constructor() {
    super();
    this.pizza = new Pizza();
  }

}

export class VeggiePizza extends Pizza {
  pizza: Pizza | null;
  constructor() {
    super();
    this.pizza = new Pizza();
  }

}