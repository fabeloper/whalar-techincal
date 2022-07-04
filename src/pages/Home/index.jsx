import React, { useState } from "react";
import WhalarIcon from "../../assets/images/whalar_icon";
import SearchBar from "../../components/SearchBar";
import { useNavigate } from "react-router-dom";

import "./home.scss";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate()

  const search = (e) => {
    navigate(`search/${e.target.value}`)
  };

  return (
    <div className="home-container">
      <SearchBar value={searchValue} setValue={setSearchValue} onSearch={search} />
      <WhalarIcon
        style={{ position: "absolute", bottom: "10px", right: "10px" }}
      />
    </div>
  );
};

export default Home;
