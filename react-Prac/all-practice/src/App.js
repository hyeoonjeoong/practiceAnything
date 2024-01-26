import "./App.css";
import Products from "./components/Products";
import CheckBox from "./components/CheckBox";
import CheckBox2 from "./components/CheckBox2";
import Bank from "./components/Bank";
import Barchart from "./components/Graph";
import CommentList from "./firstMetReact/CommentList";

function App() {
  return (
    <>
      <h3 style={{ backgroundColor: "bisque" }}>DataTable Practice</h3>
      <Products />
      <h3 style={{ backgroundColor: "bisque" }}>Check Box Practice 01</h3>
      <CheckBox />
      <h3 style={{ backgroundColor: "bisque" }}>Check Box Practice 02</h3>
      <CheckBox2 />
      <h3 style={{ backgroundColor: "bisque" }}>Bank Practice</h3>
      <Bank />
      {/* <h3 style={{ backgroundColor: "bisque" }}>Barchart nivo</h3>
      <Barchart /> */}
      <h3 style={{ backgroundColor: "bisque" }}>CommentList Practice</h3>
      <CommentList />
    </>
  );
}

export default App;
