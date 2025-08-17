import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Faculties from './components/Faculties/Faculties';
import RequestDemo from './components/Request_Demo/RequestDemo';
import ContactUs from './components/Contact_us/ContactUs';
import CustomCursor from './components/CustomCursor/CustomCursor';



function App() {
  return (
    
    <div style={{ backgroundColor: '#fff' }}>
      <CustomCursor />
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><AboutUs /></div>
      <div id="faculties"><Faculties /></div>
      <div id="demo"><RequestDemo/></div>
      <div id="contact"><ContactUs/></div>
    </div>
  );
}


export default App;
