import { 
    CREATE_LOGIN_REQUEST,
    CREATE_LOGIN_SUCCESS,
    CREATE_LOGIN_FAILURE,
    
  } from '../action/LoginAction';
  
  const initialState = {
    
    login: [],
    loading: false,
    error: null,
    isSubmitted:false,
  };
  const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
       case CREATE_LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
        
      case CREATE_LOGIN_SUCCESS:
        console.log('login successfully:', action.payload);
        
        // Add the new course to the existing courses array
        return {
          ...state,
          loading: false,
          courses: [...state.login, action.payload],
          isSubmitted:true,
          error: null,
        };
       
      case CREATE_LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      
      default:
        return state;
    }
  };
  
  export default LoginReducer;