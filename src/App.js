import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Navbar from "./Pages/Navbar/Navbar";
import AllMovie from "./Pages/AllMovies/AllMovie";
import UpComing from "./Pages/UpComing/UpComing";
import Tv from "./Pages/Tv/Tv";
import Genres from "./Pages/Genres/Genres";
import Seacrh from "./Pages/Search/Seacrh";
import Detail from "./Pages/Detail/Detail";
import Footer from "./Pages/Footer/Footer";
// import { AuthContextProvider } from "./Components/context/AuthContext";
import Register from "./Pages/Register/Register";
import Regist from "./Pages/Regist/Regist";

function App() {
  return (
    <div className="App flex w-full h-screen h-full  flex-col">
      {/* <AuthContextProvider> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AllMovies" element={<AllMovie />} />
          <Route path="/UpComing" element={<UpComing />} />
          <Route path="/Tv" element={<Tv />} />
          <Route path="/Genres/:genres" element={<Genres />} />
          <Route path="/Search/:name" element={<Seacrh />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Regist" element={<Regist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </AuthContextProvider> */}
    </div>
  );
}

export default App;
