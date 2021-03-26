import React, { useState, useContext, useEffect } from "react";
import PostContainer from "../components/PostContainer";
import UserContext from "../context/userContext";
import moment from "moment";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./pages.css";
import PlayerContainer from "../components/Music/PlayerContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileUpload from "../components/FileUpload";

const Profile = (props) => {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    if (!userData.user) history.push("/login");
    getEvents();
  }, [userData.user, history]);
  const getEvents = async () => {
    const clientId = process.env.REACT_APP_CLIENTID;
    const apiKey = process.env.REACT_APP_APIKEY;
    try {
      const response = await axios.get(
        `https://api.seatgeek.com/2/events?taxonomies.name=concert&geoip=true&client_id=${clientId}&client_secret=${apiKey}`
      );
      const concert = response.data.events;
      setEvents(concert);
      console.log("response:", concert);
    } catch (error) {
      console.log(error);
    }
  };
  // const deleteProfile = async () => {
  //   try {
  //     await axios.delete("/user", {
  //       headers: { "x-auth-token": localStorage.getItem("auth-token") },
  //     });
  //     history.push("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className="grid-container">
      <div className="profileHeader">
        <h1>
          {userData.user?.firstName} {userData.user?.lastName}
        </h1>
        <h2>About</h2>
        <FileUpload />
        {/* <img src="./Images/Profile1.png" /> */}
        <div>Singer/Pianist/Music Producer</div>
        <hr></hr>
        <div>Contact Me</div>
        <i className="fas fa-phone" />
        <i className="fab fa-map-market-alt" />
        <i className="fab fa-soundcloud" />
        <i className="fab fa-youtube" />
        <i className="fab fa-itunes-note" />
        <i className="fab fa-spotify" />
      </div>
      <div className="aboutMe">
        <PlayerContainer />
      </div>
      <div className="postContainer">
        <h1>Network</h1>
        <PostContainer />
      </div>
      <div className="allPost pt-3">
        <div className="container">
          <h2>Upcoming Events near you</h2>
          <div className="row">
            {events.map((item, index) => (
              <div className="allPostGrid" key={index}>
                <h3> {item.title} </h3>
                <FontAwesomeIcon /> <i className="fas fa-guitar" />
                <p>
                  {item.datetime_tbd
                    ? "TBD"
                    : moment(item.datetime_local).format("MMMM Do YYYY")}
                </p>
                <img src={item.performers[0].image} alt=""></img>
                <p></p>
                <a href={item.url} target="_blank" rel="noreferrer">
                  Ticket <FontAwesomeIcon /> <i className="fas fa-ticket-alt" />
                </a>
                <h2>{item.venue.name}</h2> <FontAwesomeIcon />{" "}
                <i className="fas fa-map-pin" />
                <p>{item.venue.address}</p>
                <p>{item.venue.display_location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;