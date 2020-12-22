import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Route from './Router/Routes';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter forceRefresh>
      <Route/>
    </BrowserRouter>
  );
}

export default App;
