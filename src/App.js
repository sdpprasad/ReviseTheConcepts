// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EventUseState from './Components/Events/EventUseState';

import First from "./Components/first";
import PassingProps from "./Components/PassingProps";
import AcessArrayandObject from  "./Components/AcessArrayandObject";
function App() {
  // const person= {
  //   name:'prasad',
  //   age:12,
  //   emoji:'👌😍',
  // }

  return (
      <div className="App">
      
      {/* <PassingProps person = {person}/>
      <AcessArrayandObject /> */}
      <BrowserRouter>
      {/* <First name="prasad..!"/> */}
<<<<<<< HEAD
          {/* <AcessArrayandObject/> */}
=======
          <AcessArrayandObject />
>>>>>>> f4a197f0b46b99f8c1ea399d8ba827ce1d2cefbe
          <Routes>
          <Route path="/"element={<First/>}/>
          <Route path="/AcessArrayandObject"element={<AcessArrayandObject/>}/>
          <Route path="/PassingProps"element={<PassingProps/>}/>
          <Route path="/EventUseState"element={<EventUseState/>}/>


          </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
