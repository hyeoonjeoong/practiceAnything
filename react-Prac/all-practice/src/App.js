import "./App.css";
import Products from "./components/Products";
import CheckBox from "./components/CheckBox";
import CheckBox2 from "./components/CheckBox2";
import Bank from "./components/Bank";
import Barchart from "./components/Graph";
import CommentList from "./firstMetReact/CommentList";
import ReactHookForm from "./components/ReactHookForm";

function App() {
  //이렇게 하면 로그인 토큰 저장
  const login = async () => {
    const res = await axios.post("/auth/signIn");
    localStorage.setItem("accessToken", res.data.token);
  };

  //이건 로그아웃 할 떄는 삭제하고
  const logout = async () => {
    localStorage.removeItem("accessToken");
  };

  //로그인 요청 보낼때는? (로그인 권한을 필요로 하는)
  const getData = async () => {
    const res = await axios.get("/todo", {
      headers: {
        Authorization: `Barer ${localStorage.getItem("accessToken")}`,
      },
    });
  };

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
      <h3 style={{ backgroundColor: "bisque" }}>React hook form Practice</h3>
      <ReactHookForm />
    </>
  );
}

export default App;
