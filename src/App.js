import './App.css';
import "./Resources/style.css"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Header from './Components/Header/Header';
import AskQuestion from './Components/AskQuestion/AskQuestion';

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
          <Route
            path="/ask"
            element={
              <>
                <Header />
                <AskQuestion />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
