import './App.scss';
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Main/Home';
import Footer from "./Components/Footer/Footer"
import Modal from './Components/Modal/Modal';
import { useState, useEffect } from 'react';
import Form from './Components/Header/Form/Form';
import History from './Components/Main/Pages/History/History';
import Service from './Components/Main/Pages/Service/Service';
import Gallery from './Components/Main/Pages/Gallery/Gallery';
import Appoint from './Components/Appoint/Appoint';



function App() {
  const [modalActive, setModalActive] = useState({
    modal1: false,
    modal2: false

  })

  const [data, setData] = useState({});

  useEffect(() => {
    const raw = localStorage.getItem("Appointments") || {}
    setData(JSON.parse(raw))

  }, [])
  
  console.log (data)
  

  return (
    <div className='wrapper'>
      <Router>
          
        <Header data={data} modalActive={modalActive.modal1} setModalActive={setModalActive}/>
        
        <Routes>

          <Route path="/" element={<Home />}></Route>
            
          <Route path="/home" element={<Home modalActive={modalActive} setModalActive={setModalActive}/>}></Route>
              
          <Route path="/history" element={<History />}></Route>

          <Route path="/service" element={<Service modalActive={modalActive.modal1} setModalActive={setModalActive}/>}></Route>

          <Route path="/gallery" element={<Gallery />}></Route>
              
          <Route path='/appoint' element={<Appoint/>}></Route> 
            
        </Routes>
        
        <Footer/>

      </Router>

      <Modal active={modalActive.modal1} setActive={setModalActive}>
        <Form data={data} setData={setData} modalActive={modalActive} setModalActive={setModalActive}/>
      
      </Modal>

      <Modal active={modalActive.modal2} setActive={setModalActive}>
        <Appoint data={data} setData={setData}/>

      </Modal>
         
    </div>
  );
}

export default App;
