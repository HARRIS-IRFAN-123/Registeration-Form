// {type:"LOGGED_IN",USER,PAYLOAD : {name : "Mohsin Irfan", role:"buyer"}} 
export const authReducer =(state={name : "Mohsin Irfan", role : "buyer"}, action) => {
    switch(action.type){
      case "LOGGED_IN_USER":
      return{...state,...action.payload};
      case "LOG_OUT":
      return action.payload
      default:
        return state;
    }
  }