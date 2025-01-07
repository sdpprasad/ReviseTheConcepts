// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EventUseState from './Components/Events/EventUseState';

import First from "./Components/first";
import PassingProps from "./Components/PassingProps";
import AcessArrayandObject from  "./Components/AcessArrayandObject";
import Form from './Components/Events/Form';
// import Form from './Components/Events/Form';
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
          {/* <AcessArrayandObject/> */}
          <Routes>
          <Route path="/"element={<First/>}/>
          <Route path="/AcessArrayandObject"element={<AcessArrayandObject/>}/>
          <Route path="/PassingProps"element={<PassingProps/>}/>
          <Route path="/EventUseState"element={<EventUseState/>}/>
          <Route path="/Form"element={<Form/>}/>

        
          </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
