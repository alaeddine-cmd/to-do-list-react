# 📝 React To-Do List App (Vite + Yarn)

A modern and stylish **To-Do List** application built using **React**, **Vite**, and **Context API**. It supports task management (add, edit, delete, mark complete) and features a persistent **dark/light theme toggle** using **CSS variables**.

---

## ✨ Features

- ✅ Add, edit, delete tasks
- ✔️ Mark tasks as completed with checkbox
- 🌓 Light/Dark mode toggle via Context API
- 💾 Persistent data using `localStorage`
- 🎨 Themed UI with CSS variables
- ⚡️ Fast development with Vite
- 📱 Responsive design

---

## 🧰 Tech Stack

- **React** (with Hooks)
- **Vite** for fast bundling and HMR
- **Context API** for theme management
- **CSS variables** for light/dark mode
- **localStorage** for persistent tasks
- **Yarn** as the package manager

---

## 🗂️ Project Structure
```plaintext
src/
├── components/
│ └── NavBar.jsx #
│ └── ToDoList.jsx
├── context/
│ └── ThemeContext.jsx
├── styles/
│ └── ToDoList.css
│ └── NavBar.css
│ └── themes.css
├── App.jsx 
└── main.jsx
```
---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/alaeddine-cmd/to-do-list-react
cd to-do-list-react

```

### 2. Install Dependencies

```bash
yarn
```

### 3. Run the App

```bash
yarn dev
```

### 4. Build for Production

```bash
yarn build
```
