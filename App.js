


import'./App.css';
//import Aboutme from './components/Aboutme';
import Navi from './components/Navi';
import Textin from './components/Textin';

function App(){
    return(
<>
  
  <Navi  title="Navbar" hello ="Home" aboutText = "Writnings" />
 <div className="container my-3">
    {/* <Aboutme/> */}
 <Textin heading = "Enter your name here -"/> 

    </div>
   
 </>     
       
       );
}
export default App;


