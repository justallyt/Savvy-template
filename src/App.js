import { useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Home from './pages/Home';
import {Routes, Route, useLocation} from "react-router-dom"
import About from './pages/About';
import Services from './pages/Services'
import Project from './pages/Project';
import Pricing from './pages/Pricing';
import Team from './pages/Team'
import FaqsPage from './pages/FaqsPage';
import Page404 from "./pages/Page404"
import Articles from './pages/Articles';
import SingleArticle from './components/blogPage/SingleArticle';
import Contact from './pages/Contact';

function App() {
  const location = useLocation()

  const alwaysOnTopPage = () =>{
       window.scrollTo(0, 0);
  }
  useEffect(()=>{
         alwaysOnTopPage()
  },[location])

  
  Aos.init({
       duration: 1500,
       offset: 100,
       once: true,
  })
  return (
    <div className="App">
           <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/pages/project' element={<Project />} />
                <Route path="/pages/pricing" element={<Pricing />} />
                <Route path="/pages/team" element={<Team />} />
                <Route path="/pages/faq" element={<FaqsPage />} />
                <Route path="/pages/404-page-not-found" element={<Page404 />} />
                <Route path="/blog/articles" element={<Articles />} />
                <Route path="/blog/articles/:id" element={<SingleArticle />} />
                <Route path='/contact' element={<Contact />} />
           </Routes>
    </div>
  );
}

export default App;
