# 🚀 DevStack — Developer Technology Stack

**DevStack** is a modern and interactive web application designed to help developers explore, manage, and curate their ideal technology stack for software projects.

Users can browse available technologies, add them to their personal stack, remove them when needed, and get instant feedback through toast notifications.

---

## 🚀 Live Demo

🌐 **Live Website:** https://b-14-assingnment-5.netlify.app/

---

## 🛠️ Technologies Used

| Category          | Technology             |
| ----------------- | ---------------------- |
| **Framework**     | React + Vite           |
| **Language**      | TypeScript             |
| **Styling**       | Tailwind CSS + DaisyUI |
| **Icons**         | React Icons            |
| **Notifications** | React Toastify         |

---

## ✨ Features

### 💻 Interactive Tech Selection

Users can explore available technologies and easily add or remove them from their personal technology stack with real-time state updates.

### 🚫 Duplicate Prevention & Alerts

Prevents users from adding the same technology multiple times and provides instant feedback using **React Toastify**.

### 📱 Responsive Design

A mobile-first responsive interface optimized for:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

### ⚡ Dynamic User Interface

The application updates the selected technology stack instantly based on user interactions without requiring a page reload.

---



## 💻 Run Locally

Follow these steps to run the project on your local machine.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd devstack
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in your browser

```text
http://localhost:5173
```

---

## 📦 Main Dependencies

* React
* React DOM
* Vite
* TypeScript
* Tailwind CSS
* DaisyUI
* React Icons
* React Toastify

---

## ❓ Questions & Answers

### Q1. What is JSX, and why is it used in React?

**Answer:** JSX stands for JavaScript XML. It allows us to write HTML-like syntax inside JavaScript and makes React UI development easier to read and write.

### Q2. What is the difference between props and state?

**Answer:** Props are read-only data passed from a parent component to a child. State is used to manage data that can change inside a component.

### Q3. What does the `useState` hook do, and where did you use it in this project?

**Answer:** `useState` is a React Hook used to manage changing data in a component. I used it to manage the selected technology stack and other interactive UI states.

### Q4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Answer:** `useEffect` runs side-effect code after a component renders. I used it to fetch and load the technology data from the JSON file.

### Q5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:** A unique `key` helps React identify each item in a list and efficiently update the correct item when the list changes.

### Q6. What is conditional rendering? Show one place you used it.

**Answer:** Conditional rendering means displaying different UI elements based on a condition. I used it to show an empty-stack message when no technology has been selected.

### Q7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:** Data is passed from parent to child using props. A child can communicate back to the parent by calling a callback function passed through props.

---

## 🔗 Relevant Links

* 🌐 **Live Demo:** https://b-14-assingnment-5.netlify.app/
* 💻 **GitHub Repository:** https://github.com/Tamal-codes

---

## 👨‍💻 Author

**Towfiqul Islam**

Web Developer | Frontend Developer

🔗 [LinkedIn]  https://www.linkedin.com/in/towfiqul-islam-46a312431/
