import "./App.css";
import { useState } from "react";

const Todo = (props) => (
  <>
    <tr>
      <td>
        <label>{props.id}</label>
      </td>
      <td>
        <input />
      </td>
      <td>
        <label>{props.createdAt}</label>
      </td>
    </tr>
  </>
);

function App() {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "19:00",
    },
    {
      id: "todo2",
      createdAt: "20:00",
    },
  ]);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  };

  return (
    <>
      <button onClick={reverseOrder}>Reserve</button>
      <table>
        <tbody>
          {todos.map((todo) => (
            <Todo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
