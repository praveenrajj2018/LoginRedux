export const CREATE_LOGIN_REQUEST = 'CREATE_LOGIN_REQUEST';
export const CREATE_LOGIN_SUCCESS = 'CREATE_LOGIN_SUCCESS';
export const CREATE_LOGIN_FAILURE = 'CREATE_LOGIN_FAILURE';

export const createLoginRequest = (formData) => ({
    type: CREATE_LOGIN_REQUEST,
    payload: formData
  
  });
   
  export const createLoginSuccess = (login) => ({
    type: CREATE_LOGIN_SUCCESS,
    payload:login
    
  });
   
  export const createLoginFailure = (error) => ({
    type: CREATE_LOGIN_FAILURE,
    payload: error,
  });