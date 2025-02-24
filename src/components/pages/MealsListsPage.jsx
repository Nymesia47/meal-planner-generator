import { useEffect, useState } from "react";
import "/src/styles/MealsListPage.scss";

function MealsListsPage() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3306/meals"); // Replace when deployed
        if (!response.ok) {
          throw new Error("Failed to fetch meals");
        }
        const data = await response.json();
        setMeals(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMeals();
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

export default MealsListsPage