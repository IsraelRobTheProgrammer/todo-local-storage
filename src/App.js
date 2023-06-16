// import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/todo";

function App() {
  return (
    <div
      className="container border border-primary rounded mt-5"
      style={{
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmDXrn-5hjWZ3iLWqwilPWJ63EwgO-pL5ZnTSM0UBILx7thbIXs0za2KdvwZCeyuRef8&usqp=CAU)`,
        backgroundSize: "cover",
      }}
    >
      <h1>Welcome To the todo app</h1>
      <Todo/>
    </div>
  );
}

export default App;
