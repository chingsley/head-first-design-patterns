export abstract class Pizza {
  region: string = '';
  name: string = '';
  dough: string = '';
  sauce: string = '';
  toppings: string[] = [];

  prepare() {
    console.log(`
      preparing the ${this.region} ${this.getName()} pizza:
      Tossing dough...
      Adding sauce...
      Adding toppings: ${this.toppings.join(', ')}
    `);
  }
  bake() {
    console.log('Bake for 25 minutes at 350');
  }
  cut() {
    console.log('Cutting the pizza into diagonal slices');
  }
  box() {
    console.log('Place pizza in official PizzaStore box');
  }

  getName() {
    return this.name;
  }
}