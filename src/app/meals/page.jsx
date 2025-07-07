"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MealSearchInput from "./components/MealSearchInput";

export default function Meals() {
  const searchParams = useSearchParams();
  const query = searchParams.get("search") || "";

  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      setNotFound(false);
      try {
        const url = query
          ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
          : `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching meals:", error);
        setMeals([]);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [query]);

  return (
    <div>
      <MealSearchInput />
      {loading ? (
        <div className="text-center mt-6 text-blue-600 font-medium">
          Loading meals...
        </div>
      ) : notFound ? (
        <div className="text-center text-red-600 mt-4 text-lg">
          No meals found for "<span className="font-semibold">{query}</span>"
        </div>
      ) : (
        <div className="px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="border-2 border-purple-500 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={meal.strMealThumb}
                alt="Meal"
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg font-bold mb-2">{meal.strMeal}</h2>
              <p className="text-gray-600 mb-2 font-semibold">
                Category: {meal.strCategory}
              </p>
              <p className="text-gray-600 mb-2 font-semibold">
                Area: {meal.strArea}
              </p>
              <p className="text-gray-600 mb-2">
                Instruction: {meal.strInstructions.slice(0, 50)}...
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
