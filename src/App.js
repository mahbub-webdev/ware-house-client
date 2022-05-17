import { Route, Routes } from "react-router-dom";
import AddItems from "./components/AddItems/AddItems";
import AllItems from "./components/AllItems/AllItems";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import RequirAuth from "./components/RequirAuth/RequirAuth";
import SignUp from "./components/SignUp/SignUp";




function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/allitems" element={
          <RequirAuth>
            <AllItems />
          </RequirAuth>}>
        </Route>
        <Route path='/additem' element={
          <RequirAuth>
            <AddItems/>
          </RequirAuth>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
