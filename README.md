# 🍽️ Next.js Data Fetching App

This is a simple project built with **Next.js 13+ App Router**, which demonstrates how to fetch and display data from real APIs:

- 📘 **JSONPlaceholder** – for dummy blog posts.
- 🍔 **TheMealDB** – for live meal search functionality.

---

## 🚀 Features

- ✅ Fetch all posts from JSONPlaceholder API
- ✅ Dynamic post page using `[id]` route
- ✅ Live meal search from TheMealDB API
- ✅ Client-side fetching using `useEffect` & `fetch`
- ✅ Responsive layout with Tailwind CSS
- ✅ Reusable components like Navbar and Footer
- ✅ Clean app directory structure (Next.js 13+)

---

## 🛠️ Technologies Used

- [Next.js 13+](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [TheMealDB API](https://www.themealdb.com/api.php)

---

## 🗂️ Folder Structure

```
src/
  app/
    meals/
      components/
        MealSearchInput.jsx
      page.jsx
    posts/
      [id]/
        page.jsx
    components/
      Navbar.jsx
      Footer.jsx
    layout.js
    page.js
    globals.css
```

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/fakrul-hossain/next-js-data-fetching
cd nextjs-data-fetching-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Then open your browser and visit: [http://localhost:3000](http://localhost:3000)

---

## 📌 API Endpoints Used

- 🔸 Posts API: `https://jsonplaceholder.typicode.com/posts`
- 🔸 Meal Search API: `https://www.themealdb.com/api/json/v1/1/search.php?s={query}`

---

## 🔍 Pages Overview

- `/` → Home Page with links
- `/posts` → List of all posts (You can extend this)
- `/posts/[id]` → Dynamic post details page
- `/meals` → Live meal search with image and category display

---

## 📸 Screenshots

| Meal Search Page | Single Post Page |
|------------------|------------------|
| ![Meal Search](https://i.ibb.co/B242K6hG/mealdb.png) | ![Post Page](https://i.ibb.co/MD2Jcggf/posts.png) |

---

## 🧑‍💻 Author

**Fakrul Hossain**  
Frontend Developer | MERN Stack Enthusiast

---

## 📝 License

This project is licensed under the MIT License — feel free to use and modify.

---

> 💡 Feel free to extend this app by adding more APIs, styles, or functionality like dark mode or pagination.
