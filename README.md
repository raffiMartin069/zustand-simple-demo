# Zustand Simple Demo

This project demonstrates a simple text input with a visibility toggle using Zustand, a small, fast, and scalable bearbones state management solution in React.

## Project Explanation

The main objective of this project is to showcase how Zustand can be used to manage state in a React application. In this demo, we have an input field whose text is revealed only when a checkbox is checked. Zustand helps us manage the state of the checkbox and the visibility of the text in the input field.

## Installation and Project Setup

Follow these steps to set up the project locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/raffiMartin069/zustand-simple-demo.git
    cd zustand-simple-demo
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Run the project:**
    ```bash
    npm start
    ```

The application will start on `http://localhost:3000`.

## Project Directory Structure

The directory structure of the project is as follows:

```plaintext
zustand-simple-demo/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── InputField.tsx
│   │   ├── ToggleCheckbox.tsx
│   │   └── ...
│   ├── store/
│   │   ├── useVisibilityStore.ts
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json

This project was created by **Rafael Martinez**.
This README.md provides a clear explanation of the project, instructions for installation and setup, a directory structure, and credits the author.

