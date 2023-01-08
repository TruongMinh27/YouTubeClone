import { Box } from '@mui/system';
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ChannelDetail from './components/ChannelDetail';
import Feed from './components/Feed';
import NavBar from './components/NavBar';
import SearchFeed from './components/SearchFeed';
import VideoDetail from './components/VideoDetail';
const App = () => {(
    <BrowserRouter>
        <Box sx={{backgroundColor:"#000"}}>
            <Routes>
                <NavBar/>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id'  element={<VideoDetail/>}/>
                <Route path='/channel/:id' element={<ChannelDetail/>}/>
                <Route path='/search/:searchTerm' element={<SearchFeed/>} />
            </Routes>
        </Box>
    </BrowserRouter>
)};

export default App