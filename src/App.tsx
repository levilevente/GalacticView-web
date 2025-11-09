import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NavigationBar from './components/NavigationBar.tsx';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* Wrap the application in BrowserRouter, ensures client-side routing works */}
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
