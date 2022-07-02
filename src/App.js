import "./App.css";
import Header from "./components/Header";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
// const texto = input.value;

// console.log(texto);
