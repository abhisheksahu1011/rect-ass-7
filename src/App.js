import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Students from './components/Students'
import './index.css'
import Contact from "./components/Contact";
import { StudentContextProvider } from './components/StudentContext'

function App() {
  return (
    <div className="main">
       <StudentContextProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/students" element={<Students/>}></Route>
          <Route path="/contact-us" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
      </StudentContextProvider>
      {/* <Navbar/>
      <Home/>
      <Contact/> */}
    </div>
  );
}

export default App;
