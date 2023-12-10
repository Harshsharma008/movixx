import { fetchDataFromApi } from './Utils/api' // in {} because we use the export of the single method
import { useEffect,useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfigration } from './store/homeSlice'


function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state)=>
    state.home
  )
  console.log(url);
  useEffect(()=>{
    apiTesting();
  },[])

  const apiTesting =()=>{
    fetchDataFromApi("/movie/popular")
       .then((res)=>{
        console.log(res);
        dispatch(getApiConfigration(res));
       })
  }

  return (
    <>
      <div className='App'> App
      {url?.total_pages}
      </div>
    </>
  )
}

export default App
