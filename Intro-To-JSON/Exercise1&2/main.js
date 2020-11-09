let recipe = ingredients

console.log(recipe.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
console.log(recipe.healthStatus) //should print true
console.log(recipe.caloriesValue) //should print 250
console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"