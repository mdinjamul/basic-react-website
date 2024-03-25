export const reducer = (state, action) => {
  if (action.type === "HOME_UPDATE") {
    return {
      ...state,
      heading: action.payload.heading,
      image: action.payload.image,
      name: action.payload.name,
      age: action.payload.age,
      hobby: action.payload.hobby,
    };
  }

  if (action.type === "ABOUT_UPDATE") {
    return {
      ...state,
      heading: action.payload.heading,
      image: action.payload.image,
    };
  }

  if (action.type === "GET_SERVICES") {
    return {
      ...state,
      our_services: action.payload,
    };
  }
  return state;
};

export default reducer;
