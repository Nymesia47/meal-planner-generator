import { useEffect, useState } from "react";
import "/src/styles/MealsListPage.scss";
import mealsAPI from "/src/services/api-meals.jsx";

function MealsListsPage() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMeals() {
      try {
        const data = await mealsAPI.fetchMeals(); 
        setMeals(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadMeals();
  }, []);

  if (loading) return <p>Loading meals...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>My Saved Meals</h1>
      <ul className="mealList">
        {meals.map((meal) => (
          <li key={meal.meal_id} className="mealEntry">
            <h3>{meal.meal_title}</h3>
            <p>Preparation Time: {meal.prepTime}</p>
            <p>Type: {meal.meal_types}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealsListsPage;