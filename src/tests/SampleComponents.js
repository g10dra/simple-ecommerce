import React,{useEffect,useState} from "react";

export function Hello(props) {
  if (props.name) {
    return <h1>Hello, {props.name}!</h1>;
  } else {
    return <span>Hey, stranger</span>;
  }
}

export function User(props) {
  const [user, setUser] = useState(null);

  async function fetchUserData(id) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    setUser(await response.json());
  }

  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);

  if (!user) {
    return "loading...";
  }

  return (
    <details>
      <span>Id: {user.id}</span>
      <br/>
      <summary>Name: {user.name}</summary>
      <br />
      <strong>Phone: {user.phone}</strong>
    </details>
  );
}

export const TestEvents = () => {
  const [counter, setCounter] = React.useState(0)
  
return (
  <>
    <h1 data-testid="counter">{ counter }</h1>
    <button data-testid="button-up" onClick={() => setCounter(counter + 1)}> Up</button>
    <button data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</button>
 </>
    )
  }

export function Test({title}) {
  return <h1>Hello, I am {title || 'Test Component'}</h1>;
}