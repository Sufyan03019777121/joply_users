import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import searchBarFrame from "../../assets/images/Frame_searchbar.png";
import "./searchBar.css"; 

const SearchBar = () => {
  return (
    <div className="header-container" style={{ backgroundImage: `url(${searchBarFrame})` }}>
      {/* Search Bar */}
      <div className="search-bar">
        <Input
          placeholder="Search here..."
          bordered={false}
          className="search-input"
        />
        <SearchOutlined className="search-icon" />
      </div>

      {/* Buttons */}
      <div className="header-buttons">
        <Button type="primary" size="large" className="btn-primary">
          Jobs
        </Button>
        <Button size="large" className="btn-outline">
          Map
        </Button>
      </div>

      {/* Message */}
      <p className="header-message">
        Please Enable Geolocation Permission To Load The Map
      </p>
    </div>
  );
};

export default SearchBar;
