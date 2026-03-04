# React Assignment QNA - Assignment 2

## Questions and Answers

---

#### 1. What is JSX, and why is it used?

**A1:**  JSX is a syntax exteinsion in javascript that mainly used in react. it     stands for JavaScript XML, JSX allow us right html like code in Java script

---

#### 2. What is the difference between State and Props?

**A2:**  Props is read-only datas which is passed from a parent Component to a child component props allow components to recieve external datas and make the component reusable and the State internal data managed in Component. it is mutable and it can be change over time usually in response to user actions, the component re renders when the state is changes

---

#### 3. What is the useState hook, and how does it work?

**3A:**  useState is a React hook which allow functional components to store and mange dynamic datas, it works by returning two values, the current state and a function to update the state

---

#### 4. How can you share state between components in React?

**4A:**  I can share state between components by lifting the state up to their closest common parent component and  pass the values to children components by props

---

#### 5. How is event handling done in React?

**5A:**  Event handling in React is done by passing a handler function to event attributes like onClick. If the function requires parameters, it must be wrapped in an arrow function to prevent it from executing immediately during render.