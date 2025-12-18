import { useState } from "react";

import Header from "./components/Header";
import './App.css'
import { MovieCard } from "./components/MovieCard";
import { Movies } from "./components/Movies";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Home } from "./Pages/Home";
import { MovieDetail } from "./Pages/MovieDetail";

function App() {
  const[query,setQuery] = useState("");
  return (
   <BrowserRouter>
  <Header query={query} setQuery={setQuery}/>
  <Routes>
    <Route path="/" element={<Home query={query} />}/>
    <Route path="movie/:id" element={<MovieDetail/>}/>
  </Routes>
   </BrowserRouter>
  );
}

export default App;
