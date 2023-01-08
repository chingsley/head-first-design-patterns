import { Pizza } from '../pizza/Pizza';
import { ChicagoStyleCheezePizza } from '../pizza/ChicagoStylePizzas';
import { PizzaStore } from './PizzaStore';

export class ChicagoPizzaStore extends PizzaStore {

  createPizza(type: string): Pizza {
    let pizza: Pizza | null = null;

    if (type === 'cheese') {
      pizza = new ChicagoStyleCheezePizza();
    }
    // else if (type === 'pepperoni') {
    //   pizza = new PepperoniPizza('Chicago');
    // }
    // else if (type === 'clam') {
    //   pizza = new ClamPizza('Chicago');
    // }
    // else if (type === 'veggie') {
    //   pizza = new VeggiePizza('Chicago');
    // }
    else {
      throw new Error('Unknown pizza type');
    }

    return pizza;
  }
}