import { Pizza } from '../pizza/Pizza';

export abstract class PizzaStore {

  orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);

    pizza!.prepare();
    pizza!.bake();
    pizza!.cut();
    pizza!.box();

    return pizza!;
  }

  // this is the method that acts a factory (factory method pattern)
  abstract createPizza(type: string): Pizza;
}