import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";
import MealsGrid from "@/component/Meals/meals-grid";
import { GetMeals } from "@/lib/meals";

export default function MealsPage() {
  const meals = GetMeals();
  console.log(meals);
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals ,create{" "}
          <span className={classes.highlight}>By you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it your self . it is easy and
          Fun!!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite Meals</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <MealsGrid meals={meals} />
        </Suspense>
      </main>
    </>
  );
}
