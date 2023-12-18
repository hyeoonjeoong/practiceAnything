import "./App.css";
import Products from "./components/Products";
import CheckBox from "./components/CheckBox";
import Bank from "./components/Bank";
import Barchart from "./components/Graph";
import CommentList from "./firstMetReact/CommentList";

function App() {
  return (
    <>
      <h3 style={{ backgroundColor: "bisque" }}>DataTable Practice</h3>
      <Products />
      <h3 style={{ backgroundColor: "bisque" }}>Check Box Practice</h3>
      <CheckBox />
      <h3 style={{ backgroundColor: "bisque" }}>Bank Practice</h3>
      <Bank />
      <h3 style={{ backgroundColor: "bisque" }}>Barchart nivo</h3>
      <Barchart />
      <h3 style={{ backgroundColor: "bisque" }}>CommentList Practice</h3>
      <CommentList />
    </>
  );
}

export default App;
