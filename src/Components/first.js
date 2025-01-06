import { Link } from "react-router-dom";
function First(props) {
    return (
      <div className="container-fluid  mt-100" style={{height:60}} >
        
        <Link to="/">first|</Link>
        <Link to="/PassingProps">PassingProps|</Link>
        <Link to="/AcessArrayandObject">AcessArrayandObject|</Link>
        <Link to="/EventUseState">EventUseState|</Link>
    


      </div>
    );
  }
  
  export default First;
  

