import React from "react";
import "./header.css";

const Header = () => {
  var headers = new Headers();
  headers.append("X-CSCAPI-KEY", "API_KEY");

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  fetch("https://api.countrystatecity.in/v1/states", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log("result", result))
    .catch((error) => console.log("error", error));
  return (
    <div className="header max-width">
      <img
        src="https://th.bing.com/th/id/R.19e0d20116f0f92a967cc5db632908c4?rik=wdaO%2fd88aIsvpg&riu=http%3a%2f%2fapni-rasoi.com%2fwp-content%2fuploads%2f2019%2f09%2fonlinelogomaker-092419-1320-3886-2000-transparent.png&ehk=%2b%2bTTP3Wwb3KLUnh0Hy%2fTa3LPIZIBZlwdzfiY7mvLews%3d&risl=&pid=ImgRaw&r=01"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Bangalore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>

        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile"
          />
          <span className="header-username">Chanakya</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
