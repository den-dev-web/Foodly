# Foodly

Foodly is a demo frontend project for a food delivery service, focused on clean architecture, UX quality, and modern frontend practices.

🔗 Live demo: https://den-dev-web.github.io/Foodly/

---

## 📌 About the Project

The project represents a fully functional food catalog interface with product cards, filtering, cart logic, and state persistence.  
The main goal is to demonstrate a **scalable, well-structured frontend solution built without frameworks**.

---

## ⚙️ Tech Stack

- **Vite** — project bundling and development server  
- **Vanilla JavaScript (ES Modules)** — application logic and modular architecture  
- **SCSS** — component-based styling  
- **HTML5** — semantic markup  
- **LocalStorage** — cart state persistence  
- **Normalize.css** — cross-browser consistency

---

## 🧩 Architecture & Approach

- Component-based UI structure (product cards, sections, cart)
- Clear separation of concerns with dedicated modules:
  - `catalog` — product data and rendering
  - `filters` — category filtering logic
  - `cart` — cart state and calculations
  - `ui` — UI interactions and states
- Modular, maintainable JavaScript architecture
- Progressive enhancement and basic accessibility:
  - semantic HTML
  - ARIA attributes
  - focus management
- Responsive layout with a mobile-first approach
- Smooth animations and transitions implemented without external libraries

---

## ✨ Key Features

- Product catalog with category-based filtering
- **“Load more”** functionality for incremental card rendering
- Shopping cart with:
  - item quantity management
  - automatic total price calculation
- Keyboard-accessible quantity input
- Smooth scrolling between page sections
- Cart state persistence using **LocalStorage**

---

## 🎯 What This Project Demonstrates

- Ability to build production-like interfaces using plain JavaScript
- Architectural thinking and modular code organization
- Attention to UX, responsiveness, and accessibility
- Clean project structure and readable codebase

---

## 🚀 Possible Improvements

- Product search functionality
- Enhanced state animations
- Extended filtering options
- API-based data source integration
