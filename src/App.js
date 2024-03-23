// import Header from './Header';
// import Nav from './Nav';
// import Footer from './Footer';
// import Home from './Home';
// import NewPost from './NewPost';
// import PostPage from './PostPage';
// import About from './About';
// import Missing from './Missing';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import About from './About';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Nav/>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/post' element={<NewPost/>}/>
            <Route path='/*' element={<Missing/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/post/:id' element={<PostPage/>}/>

          </Routes>
        </Router>
      <Footer/>
    </div>
  )
}

export default App
