import "./App.css";
import Header from "./components/Header";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <AppRoutes />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
      />
    </div>
  );
}

export default App;
// const texto = input.value;

// console.log(texto);
