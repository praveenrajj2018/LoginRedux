import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {CREATE_LOGIN_REQUEST,createLoginSuccess,createLoginFailure, createcontent} from '../action/LoginAction'
const API_URL = 'http://localhost:5298/swagger/v1/swagger.json';

 const Login = ({ dispatch }) => (next) => async (action) => {
  

  if (action.type === CREATE_LOGIN_REQUEST) {
    try {
      console.log("topic Post api",action.payload)
      // Assuming 'action.payload' contains the data you want to senda
      const response = await axios.post(API_URL,action.payload);
      console.log('API Response:', response.data); // Log the response data
      dispatch(createLoginSuccess(response.data.data));
      
    } catch (error) {

      console.error('API Error:', error.message);
      dispatch(createLoginFailure(error.message));
      
    }
  }
  return next(action);
  
};

export default Login;
