import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar.tsx';
import BlogPost from './pages/BlogPost.tsx';
import EpicData from './pages/EpicData.tsx';
import EpicDataPost from './pages/EpicDataPost.tsx';
import FooterBar from './components/FooterBar.tsx';
import './App.css';

function Root() {
    return (
        <div className="App">
            <div className="page-container">
                <BrowserRouter>
                    {/* wrap the application in BrowserRouter, ensures client-side routing works */}
                    <NavigationBar />
                    <main className="content-wrap">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/epicdata" element={<EpicData />} />
                            <Route path="/blogpost" element={<BlogPost />} />
                            <Route path="/epicdata/:epicDataDate" element={<EpicDataPost />} />
                        </Routes>
                    </main>
                    <FooterBar />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default Root;
