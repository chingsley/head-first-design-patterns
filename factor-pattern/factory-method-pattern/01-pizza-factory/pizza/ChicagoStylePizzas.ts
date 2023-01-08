import { Pizza } from './Pizza';
export class ChicagoStyleCheezePizza extends Pizza {
  constructor() {
    super();
    this.name = "Chicago style Deep Dish cheese Pizza";
    this.dough = "Extra thick Crust Dough";
    this.sauce = "Plum Tomatos Sauce";
    this.toppings.push('Shredded Mozarella Cheese');
  }

  cut() {
    console.log("Cutting the pizza into square slices");
  }
}