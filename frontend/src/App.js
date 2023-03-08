import './App.css';
<<<<<<< Updated upstream
import {BrowserRouter , Routes , Route  } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Services from './pages/Services';
=======
import Filtered from './pages/filtered';
>>>>>>> Stashed changes

function App() {
  return (
    <>
<<<<<<< Updated upstream
      <BrowserRouter>
                <div className="pages">
                    <Routes>
                        <Route
                            path='/'
                            element= {<Home/>}
                        />
                        <Route
                            path='/services'
                            element= {<Services/>}
                        />
                        {/* <Route
                            path='/companies'
                            element= {<Companies/>}
                        /> */}
                    </Routes>
                </div>
            </BrowserRouter>
=======
      <Filtered/>
>>>>>>> Stashed changes
    </>
  );
}
export default App;
