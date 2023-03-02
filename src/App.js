import './App.css';
import "./Resources/style.css"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <LandingPage />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
