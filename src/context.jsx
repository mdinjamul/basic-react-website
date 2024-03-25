import React, { useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const intialState = {
  name: "",
  age: "",
  hobby: "",
  our_services: [],
};

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        heading: "Tricky Solution",
        image: "./images/hero.svg",
        name: "Injamam",
        age: "23",
        hobby: "Coding",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        heading: "About Tricky Solution",
        image: "./images/about1.svg",
      },
    });
  };

  //   get api data for services page
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "GET_SERVICES",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // set api
  const API = "./api.json";
  //   Call the API
  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
