
import './App.css';
import { HomePage } from './Components/HomePage';
import { StyledEngineProvider } from '@mui/material/styles';
import { Paper } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import  NavigationBar from './Components/NavBar/NavigationBar'
import 'bootstrap/dist/css/bootstrap.css';
import { EditPost } from './Components/EditPost';
import Footer from './Components/Footer';
import { AddPost } from './Components/AddPost';




function App() {


  return (
  <StyledEngineProvider injectFirst>

      <img src="./images/post.png" alt='No Images'/>
    <Router>
    <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/editPost/${name}" element={<EditPost/>} />
        </Routes>
        </Router>
        <Footer />
  </StyledEngineProvider>
  



  );
}

export default App;
