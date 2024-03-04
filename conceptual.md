### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is widely useds JS library,created by META, for building dynamic and responsive UI best for web app that require fast paced interactions. React allows developres to create resuable UI components, mangage app state, and optimize performance through a virtual DOM. We use React when we need to create a scalable, manatinable, and user focus app.



- What is Babel?
Babel is a transpiler that allows us to use the latest JS features in our code without worrying about the browser support. It is essential part of many build processes for web apps.



- What is JSX?
JSX short for JavaScript XML, is a syntax extension to JS that allows us to write HTML in JS. JSX is used in React to create UI components. JSX is Transformed into JS function calls that create Virtual DOM Elements. The transformation is typically done using bable although not required for React JSX is a popular choice among devs for its simple and visual clarity it provides when designing UI components.




- How is a Component created in React?
In React, a component is created by writing a function or a class that returns a piece of UI in the form of JSX, which looks like HTML.



- What are some difference between state and props?
Props and state are both used to control data in components but they serve different purposes.

Props:
    - are passed to components from a parent component.
    - They are immuatble and cannot be changed.
    - Used to configure components and make the resulable by giving them different data to display or behaviours.

State:
    - are used to store data that is local to a component.
    - They are mutable and can be changed.
    - used for data that changes over time or in repsonse to user input like a users input in a form or toggelintg UI element.



- What does "downward data flow" refer to in React?
Downward data flow is a concept in React that allows data to flow down the component tree. This is done by passing props from parent to child components. This is done by passing props from parent to child components. 



- What is a controlled component?
A controlled component in React is a form element like an input, textarea, or select whose value is controlled by the state of the component. You tell it exactly what to display and it updates when the state changes, usually in response to user input. This way, the form data is handled by the React component rather than the DOM, making it easier to manage.




- What is an uncontrolled component?
An uncontrolled component in React is one where form data is handled by the DOM, rather than within the React componet state. You use refs to directly interact with the DOM nodes for reading values, istead of updating the state on every change. This approach is more like tradditonal HTML form handling, and its useful when you want to intergrate REact with non-React code or when you want to avoid unnescessary re renders and state updates for certain form inputs.




- What is the purpose of the `key` prop when rendering a list of components?
The key prop in React is used to give each item in a list a stable identity. It helps React know which items have changed or need to be added or removed, so it doesn't have to update the whole list every time something changes. This makes your app faster and more efficient, especially when dealing with long lists.


- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Using the index as the key is not a good idea when rendering lists of elements. This is because the index could be reused by other items in the list. This could cause the component to be re-rendered unnecessarily. Instead, use a unique id or a string that is associated with the item




- Describe useEffect.  What use cases is it used for in React components?
useEffect is a hook in React that allows you to perfrom side effects in function componets. Side effects are operations that can reach outside the componenet to do things like data fetching , subscriptions or mannually changing the DOM.

useEffect can be used for:
    - Subscribing to external data sources.
    - Manually changing the DOM.
    - Fetching data from an API.
    - Performing any other side effect.



- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef is a hook that allows you to create a ref that can be used to store a mutable value in a componenet.
A change to ref value does not case a re-render of the componet, this is because updating a ref is a side-effect that dosent't lead to a change in the componets state or props, which are the triggers for a components re-render.




- When would you use a ref? When wouldn't you use one?
We would use a ref in React when we need to access DOM nodes or when we need to access the underlying DOM node for a component. 

We wouldn't use ref for data that should cause the component to re-render when it changes like a count or a boolean.





- What is a custom hook in React? When would you want to write one?
A custom hook is a way to use state and other React features without having to use a class. This is useful when we want to reuse stateful logic in multiple components.