# Dev Stack Builder

Dev Stack Builder is a responsive React application that allows developers to explore different technologies and build their own development stack.

Users can view technology information, add technologies to their stack, remove individual technologies, and remove all selected technologies.

## Features

- Responsive navigation bar for desktop and mobile devices.
- Mobile-friendly hamburger menu icon.
- Hero section with project introduction and action buttons.
- Explore different technologies from a local JSON data file.
- Display technology icon, name, description, category, difficulty, rating, and badge.
- Add technologies to the personal stack.
- Prevent duplicate technologies from being added.
- Disable the Add to Stack button after a technology is selected.
- Show `✓ Added to Stack` for selected technologies.
- Display the number of selected technologies.
- Show `No technologies selected yet.` when the stack is empty.
- Remove individual technologies from the stack.
- Remove all selected technologies with the Remove All button.
- Toast notification when a technology is added to the stack.
- Loading state while technology data is being loaded.
- Responsive technology card layout.
- Responsive footer with social links and navigation sections.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- React Icons
- JSON
- Vite

## Data Management

Technology information is stored in a separate local JSON file instead of being hardcoded inside the React components.

The JSON data was created with the help of AI and then used in the project.

The data is loaded using `fetch()`:

```tsx
const technologiesDataPromise = async (): Promise<TechnologyType[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
};

```

The fetched data is then passed to the technology section and displayed dynamically using React.

## State Management

The project uses React's `useState` hook to manage the selected technologies.

```tsx
const [selectedTechnologies, setSelectedTechnologies] =
    useState<TechnologyType[]>([]);

```

The selected technology data is stored in the `App` component and passed to child components through props.

This allows the technology cards and stack section to share and update the same selected technology state.

## Loading State

The project uses React's `Suspense` and `use()` to handle the asynchronous technology data.

While the data is loading, a loading spinner is displayed.

```tsx
<Suspense fallback={
    <span className="loading loading-spinner loading-xs"></span>
}>

```

## Stack Management

Users can add technologies to their stack.

When a technology is selected:

- It is added to the selected technologies array.
- Its button becomes disabled.
- The button text changes to `✓ Added to Stack`.
- A success toast notification is displayed.

Users can also remove a single technology or remove all selected technologies.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is used to store data that can change over time inside a React application.

In this project, `selectedTechnologies` is stored as state in `App.tsx` and passed to child components through props.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React hook used to create and manage state.

In this project, it is used in `App.tsx` to store the technologies selected by the user.

```tsx
const [selectedTechnologies, setSelectedTechnologies] =
    useState<TechnologyType[]>([]);

```

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React hook used to handle side effects such as API calls, timers, and other external operations.

I did not use `useEffect` in this project.

Instead, I used `fetch()` to load the JSON data and React's `use()` with `Suspense` to handle the asynchronous data.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list.

In this project, the technology name is used as the key when rendering technology cards and selected stack items.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

In this project, conditional rendering is used in the Stack component.

When no technology is selected, it shows:

`No technologies selected yet.`

When technologies are selected, it shows the number of selected technologies.

It is also used to show the `Remove All` button only when at least one technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using props.

In this project, `App.tsx` passes `selectedTechnologies` and `setSelectedTechnologies` to `TechnologySection`.

`TechnologySection` then passes them to `TechnologyCard` and `Stack`.

The child components can update the parent's state by using the `setSelectedTechnologies` function received through props.

## Project Structure

```text
src/
├── assets/
│   ├── logo-text.png
│   └── banner-stack.png
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   └── footer.tsx
│
├── technology/
│   ├── TechnologySection.tsx
│   ├── TechnologyCard.tsx
│   └── Stack.tsx
│
├── App.tsx
└── type.ts

public/
└── data.json

```

## Developer

**Israt Jannat Halima**

Built with React, TypeScript, Tailwind CSS, DaisyUI, React-Toastify, React Icons, and Vite. meaning bangla