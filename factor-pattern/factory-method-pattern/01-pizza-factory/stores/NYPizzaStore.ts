import { NYStyleCheesePizza } from './../pizza/NYStylePizzas';
import { Pizza } from '../pizza/Pizza';
import { PizzaStore } from './PizzaStore';

export class NYPizzaStore extends PizzaStore {

  createPizza(type: string): Pizza {
    let pizza: Pizza | null = null;

    if (type === 'cheese') {
      pizza = new NYStyleCheesePizza();
    }
    // else if (type === 'pepperoni') {
    //   pizza = new PepperoniPizza('New York');
    // }
    // else if (type === 'clam') {
    //   pizza = new ClamPizza('New York');
    // }
    // else if (type === 'veggie') {
    //   pizza = new VeggiePizza('New York');
    // }
    else {
      throw new Error('Unknown pizza type');
    }

    return pizza;
  }
}