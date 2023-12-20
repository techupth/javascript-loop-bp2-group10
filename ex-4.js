// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
let i = 0;
while (i < restaurants.length ) {
    let restaurantsName = restaurants[i]
    let formattedRestaurant = "Restaurant Name: " + restaurantsName;
    newRestaurants.push(formattedRestaurant);
    i++;
}

console.log(newRestaurants);
