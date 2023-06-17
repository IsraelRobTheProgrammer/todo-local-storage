// import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/todo";

function App() {
  return (
    <div
      className="container border border-primary rounded mt-5"
      style={{
        background: `url(https://wallpaperaccess.com/full/187161.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <Todo />
    </div>
  );
}

export default App;
