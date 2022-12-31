import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Container} from './Components/index';
import { Header, Footer } from './Sections/index';
import {Home, Profile} from './Pages/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css'


const App = () => {
    return(
        <>
            <Router basename={"/reactCyporg"}>
                <Header />
                    <Container>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/Profile' element={<Profile />} />
                        </Routes>
                    </Container>
                <Footer /> 
            </Router>
        </>
    )
}
export default App;