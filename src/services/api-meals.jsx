//get all meals

async function fetchMeals() {
   return fetch(`http://localhost:3306/meals`, {method: 'GET'})
   .then(response => response.json())
   .then(data => {
    return data;
   });
};

const objToExport = {
    fetchMeals: fetchMeals
  };
  
  export default objToExport;