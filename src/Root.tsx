import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NavigationBar from './components/NavigationBar.tsx';
import Rover from './pages/Rover.tsx';
import BlogPost from './pages/BlogPost.tsx';

function Root() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* Wrap the application in BrowserRouter, ensures client-side routing works */}
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rover" element={<Rover/>} />
                    <Route path="/blogpost" element={<BlogPost/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Root
