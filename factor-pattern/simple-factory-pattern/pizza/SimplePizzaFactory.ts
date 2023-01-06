import { Pizza, CheesePizza, PepperoniPizza, ClamPizza, VeggiePizza } from './Pizza';
export class SimplePizzaFactory {

  createPizza(type: string) {
    let pizza: Pizza | null = null;

    if (type === 'cheese') {
      pizza = new CheesePizza();
    }
    else if (type === 'pepperoni') {
      pizza = new PepperoniPizza();
    }
    else if (type === 'clam') {
      pizza = new ClamPizza();
    }
    else if (type === 'veggie') {
      pizza = new VeggiePizza();
    }
    else {
      throw new Error('Unknown pizza type');
    }

    return pizza;
  }

}