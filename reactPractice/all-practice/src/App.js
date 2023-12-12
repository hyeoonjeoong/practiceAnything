import "./App.css";
import Products from "./components/Products";
import CheckBox from "./components/CheckBox";
import Bank from "./components/Bank";

function App() {
  return (
    <>
      <h3 style={{ backgroundColor: "bisque" }}>DataTable Practice</h3>
      <Products />
      <h3 style={{ backgroundColor: "bisque" }}>Check Box Practice</h3>
      <CheckBox />
      <h3 style={{ backgroundColor: "bisque" }}>Bank Practice</h3>
      <Bank />
    </>
  );
}

export default App;
