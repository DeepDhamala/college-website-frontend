import { Container } from '@mui/material'
import './App.css'
import ResponsiveAppBar from './components/Header/Header'
import Home from './pages/Home'
import MessageFromPresident from './components/messagefrompresident/messagefrompresident'
import Specialities from './components/specialities/Specialities'
import Seeking from './components/seeking/Seeking'
import News from './components/news/News'
import Shortcuts from './components/Shortcuts/Shortcuts'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Academics from './components/academics/academics'
import Admission from './components/admission/Admission'
import Tuition from './components/Tuition/Tuition'
import Campus from './components/campus/Campus'
import About from './components/about/About'
import SignIn from './components/std_form/LoginForm'
import SignUp from './components/std_form/RegisterForm'
import AdminSignIn from './components/admin_form/adminform'
function App() {

  return (
    <>
    <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/academics" element={<Academics/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/admission" element={<Admission/>}/>
          <Route path="/tuition&scholarships" element={<Tuition/>}/>
          <Route path="/campus" element={<Campus/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/student' element={<SignIn/>}/>
          <Route path='/student_register' element={<SignUp/>}/>
          <Route path='/admin' element={<AdminSignIn/>}/>
        </Routes>    
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
