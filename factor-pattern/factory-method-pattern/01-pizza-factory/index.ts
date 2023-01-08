import { ChicagoPizzaStore } from './stores/ChicagoPizzaStore';
import { NYPizzaStore } from "./stores/NYPizzaStore";

const nyStore = new NYPizzaStore();
const chicagoStore = new ChicagoPizzaStore();

let pizza = nyStore.orderPizza('cheese');
console.log(`Ethan ordered a ${pizza.getName()}`);

pizza = chicagoStore.orderPizza('cheese');
console.log(`Joel ordered a ${pizza.getName()}`)

