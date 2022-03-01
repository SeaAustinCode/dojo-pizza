function pizzaoven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaoven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaoven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaoven("hand tossed", "marinara", "mozzarella", "mushrooms")
console.log(pizza3)

var pizza4 = pizzaoven("deep dish", "traditional", "feta", "olives")
console.log(pizza4)

var crustType = [
    "deep dish",
    "hand tossed",
];

var saucetype = [
    "traditional",
    "marinara",
];

var cheese = [
    "mozzarella",
    "feta",
];

var toppings = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "olives",
    "onions",
];
