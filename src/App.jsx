import Home from "./pages/Home";
import Results from "./pages/Results";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="search">
            <Route path=":searchValue" element={<Results />} />
          </Route>
          <Route path="detail">
            <Route path=":movieId" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
