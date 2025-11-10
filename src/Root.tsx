import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar.tsx';
import BlogPost from './pages/BlogPost.tsx';
import EpicData from './pages/EpicData.tsx';

function Root() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* Wrap the application in BrowserRouter, ensures client-side routing works */}
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/epicdata" element={<EpicData />} />
                    <Route path="/blogpost" element={<BlogPost />} />
                    <Route path="/epicdata/:epicdatadate" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Root;
