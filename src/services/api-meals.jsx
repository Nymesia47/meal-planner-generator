//get all meals

async function fetchMeals() {
   return fetch(`http://localhost:3306/meals`, {method: 'GET'})
   .then(response => response.json())
   .then(data => {
    return data;
   });
};



//Sen a POST request to add a new meal

async function addMeal(mealData) {
   return fetch(`http://localhost:3306/meals`, {
     method: 'POST',
     headers: {
        'Content-Type': 'application/json',
     },
     body: JSON.stringify(mealData)
   })
   .then(response => response.json())
   .then(data => {
      return data;
   })
   .catch(error => {
      console.error("Error adding meal:", error);
      return {success: false, message: error.message};
   });
}

  


const objToExport = {
   fetchMeals,
   addMeal
};
 
export default objToExport;