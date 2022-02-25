export const usersReducer = (state = {}, action) => {

    switch (action.type) {
      case "SET_USERS":
        return { ...state, users: [...action.payload] };
        case "GET_PROFILE":
          return { ...state, profile:action.payload }; 
        case "CLEAR_PROFILE":
          return { ...state, profile:{} };
    default:
      return state;
  }
};
