import NavBar from "./components/NavBar";
import ToDoList from "./components/ToDoList";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/themes.css";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <ToDoList />
    </ThemeProvider>
  );
}

export default App;
