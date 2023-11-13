import "./styles.css";

export default function App() {
  return <Greeting name="Mareike" isCoach />; // shorthand syntax for boolean props (if the value is true, you can omit the value)
}

function Greeting({ name, isCoach }) {
  return <h1>Hello, {isCoach ? name : "there"}!</h1>;
}
