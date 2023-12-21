import { fetchDataFromApi } from './Utils/api' // in {} because we use the export of the single method
import { useEffect,useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfigration, getGenres } from './store/homeSlice'
import Header from "./Components/header/Header"
import Footer from "./Components/footer/Footer"
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import SearchResult from './pages/searchResult/SearchResult'
import PageNotFound from './pages/404/PageNotFound'


function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state)=>
    state.home
  )
  console.log(url);
  useEffect(()=>{
    fetchApiConfig();
    genresCall();
  },[])

  const fetchApiConfig =()=>{
    fetchDataFromApi("/configuration")
       .then((res)=>{
        console.log(res);

        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",

        };
        dispatch(getApiConfigration(url));
       })
  }
  const genresCall = async ()=>{
    let promises = [];
    let endPoints=["tv","movie"];
    let allGenres = {};

    endPoints.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    })
  
  
  const data = await Promise.all(promises);
  console.log(data);
  data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
  });

  dispatch(getGenres(allGenres));
};


  return (
    <BrowserRouter>
    <Header/>
     <Routes>
     <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
