import './App.css';
import profile from "./image/a.jpg";
import email  from "./image/email.jpg";
import pass  from "./image/pass.jpg";
import { FaFacebook , FaLinkedin ,FaGooglePlusG}from 'react-icons/fa';

function App() {
  return (
     <div className="main">
   <div className="sub-main">
    
<div>
     <div className="imgs">  
     <div className="contrainer-image">
     <img  src={profile} alt='profile' className='profile'/>
     
     </div>
    </div>
     
     <div> 
  <h1>Login</h1>


<div>
    <img src={email} alt="email" className="email"/>
     <input type="text" placeholder='Email' className="name"/>
  </div> 

    
    
    <div className="second-input">
     <img src={pass} alt="pass" className="email"/>
     <input type="password" placeholder='Password' className="name"/>
    </div>

    
    <div className="login-button">
      <button  > Sign up </button>
    </div>
    
    <p className="link">
    <a href='#'>forget password?</a> </p>
    <p1> <a href='#'>don't have an account ?</a>
     </p1>

<div className='icon'>
     <FaFacebook className="icon facebook"/>   
       <  FaGooglePlusG className="icon google"/>
       <FaLinkedin className="icon linkedin"/>
       <div className='des'>
        

       </div>


     
    </div>
    </div>
  
  </div>
  </div>
  </div>
  );
}

export default App;
