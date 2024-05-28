import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Final} from "../view/Final";
//import { Login} from "../view/login";

function App() {
return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Final/>} />
        
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
