
import './App.css'
import About from './components/About'
import Certificate from './components/certificates'
import Contact from './components/Contact'
import ContactMe from './components/Address'
import Footer from './components/Footer'
import GraphichProject from './components/GraphichProject'
import Header from './components/Header'
import Projects from './components/Projects'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  



function App() {
  

  return (
    <div className='w-full overflow-hidden'>
  <ToastContainer />
      <Header/>
      <About />
      <Projects />
      <GraphichProject />
      <Certificate />
      <ContactMe />
      <Contact />
      <Footer />
      

    </div>
  )
}

export default App
