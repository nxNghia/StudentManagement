import Login from './page/login/Login';
import Profile from './page/profile/Profile';
import Header from './component/header/Header';
import Achievement from './page/achievement/Achievement';
import Manager from './page/manager/Manager';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MODAL from './component/MODAL/MODAL';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
        <Header />
        <Routes>
          <Route path='/' element={<Manager />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/achievement' element={<Achievement />} />
          <Route path='/modal' element={<MODAL />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
