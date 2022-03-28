export const initialState = {
    events: [],
    user: null,
  };

  const reducer = (state, action) => {
    // let index;
  
    // if (action.oggetto) {
    //   index = state.events.findIndex(
    //     (oggetto) => oggetto.id === action.oggetto.id
    //   );
    // }
  
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };

        case "ADD_EVENT":
          
          return{
            ...state,
            events: [...state.events, action.oggetto],
            };
          
          

          default:
            return{
              ...state,
            }
    }
}

export default reducer;