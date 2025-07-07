"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function MealSearchInput() {
  const [searchMeal, setSearchMeal] = useState("");
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const query = new URLSearchParams();
    if (searchMeal) {
      query.set("search", searchMeal);
    }
    router.push(`${path}?${query.toString()}`);
  }, [searchMeal, path, router]);

  return (
    <div className="text-center my-4">
      <input
        type="text"
        value={searchMeal}
        onChange={(e) => setSearchMeal(e.target.value)}
        placeholder="Search for a meal"
        className="border p-2 rounded-md w-64 text-center"
      />
    </div>
  );
}
