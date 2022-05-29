async function cookMeal(){
    return promise = new Promise((resolve, reject) => {
        setTimeout(() => { resolve('Meal cooked'); }, 3000);
    });
}

module.exports = cookMeal;