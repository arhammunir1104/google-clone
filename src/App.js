import logo from './logo.svg';
import './App.css';
import {Home} from "./pages/Home"
import {Header} from "./Components/Header"
import { Route , Routes} from 'react-router-dom';
import {SearchPage} from "./pages/SearchPage"
function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path="/search/:query" Component={SearchPage} />
      </Routes>
    </div>
    </>
  );
}

export default App;
