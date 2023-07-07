
const menu = {
    _meal: ['Classic burger', 'Tacos al pastor', 'BBQ Chicken', 'Ceasar Salad', 'Pasta ala Giorgio'],
    _price: [45, 25, 18, 32, 28],
    get todaySpecial() {
      if (this._meal && this._price ) {
        return `Today’s Special is ${this._meal} for $${this._price}!`
      } return 'Meal or price was not set correctly!'
    },
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      }
      return this._meal;
    }, 
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            this._price = priceToCheck;
        }
        return this._price;
    }
  };
  
  let generateRandomMeal = menu._meal[Math.floor(Math.random() * 5)]
  let generateRandomPrice = menu._price[Math.floor(Math.random() * 5)]

  menu.meal = generateRandomMeal;
  menu.price = generateRandomPrice;
  
  console.log(menu.todaySpecial); 





