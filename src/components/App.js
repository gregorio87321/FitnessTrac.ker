import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { callApi } from "../api";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { AccountForm } from ".";
import { Routines } from ".";
import { Activities } from ".";

const App = () => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);

  const history = useHistory();

  const fetchUserData = async (token) => {
    const { data } = await callApi({
      url: "/users/me",
      token,
    });
    return data;
  };

  const fetchRoutines = async () => {
    const {
      data: { routines },
    } = await callApi({
      url: "/routines",
    });
    return routines;
  };

  useEffect(async () => {
    if (!token) {
      setToken(localStorage.getItem("token"));
      return;
    }
    const data = await fetchUserData(token);
    if (data && data.username) {
      setUserData(data);
    }
  }, [token]);

  useEffect(async () => {
    const routines = await fetchRoutines();
    setRoutines(routines);
  }, []);

  const logout = async () => {
    // setToken(null);
    // setUserData(null);
    localStorage.removeItem("token");
    history.push(`/routines`);
    window.location.reload(false);
  };

  const fetchActivities = async () => {
    const {
      data: { activities },
    } = await callApi({
      url: "/activities",
    });
    return activities;
  };

  useEffect(async () => {
    const activities = await fetchActivities();
    setActivities(activities);
  }, []);



  return (
    <Router>
      <div>
        <div>
          <h2 id="homeGreeting"> Welcome to </h2>
          <h1 className="title"> Fitness Tracker! </h1>
          <>
            {!token ? (
              <Link to="/login">Log In</Link>
            ) : (
              <button
                className="btn-primary"
                onClick={(event) => {
                  // event.preventDefault();
                  logout();
                }}
              >
                Log Out
              </button>
            )}
          </>
          {token ? (
            <>
              <h2 className="user_greeting"> Hello {userData.username}! </h2>
            </>
          ) : (
            ""
          )}
          <Link style={{ marginLeft: "10px" }} to="/routines">
            Routines
          </Link>
          <Link style={{ marginLeft: "10px" }} to="/activities">
            Activities
          </Link>
          <Link style={{ marginLeft: "10px" }} to="/">
            Home
          </Link>
        </div>
      </div>
      <Switch>
        <Route path="/login">
          <AccountForm action="login" setToken={setToken} />
        </Route>
        <Route path="/register">
          <AccountForm action="register" setToken={setToken} />
        </Route>
        <Route path="/routines">
          <Routines token={token} routines={routines} userData={userData} />
        </Route>
        <Route path="/activities">
          <Activities token={token} activities={activities} userData={userData} />
        </Route>
        {/* /* <Route path="/post/:postId">
        <SinglePost posts={posts} token={token} userData={userData} setPosts={setPosts}/>
      </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
