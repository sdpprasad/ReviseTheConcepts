// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import First from "./Components/first";
import PassingProps from "./Components/PassingProps";
import AcessArrayandObject from  "./Components/AcessArrayandObject";
function App() {
  const person= {
    name:'prasad',
    age:12,
    emoji:'👌😍',
  }

  return (
      <div className="App">
      
      {/* <PassingProps person = {person}/>
      <AcessArrayandObject /> */}
      <BrowserRouter>
      {/* <First name="prasad..!"/> */}
          <AcessArrayandObject />
          <Routes>
          <Route path="/"element={<First/>}/>
          <Route path="/AcessArrayandObject"element={<AcessArrayandObject/>}/>
          <Route path="/PassingProps"element={<PassingProps/>}/>

          </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
