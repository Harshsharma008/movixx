import { fetchDataFromApi } from './Utils/api' // in {} because we use the export of the single method
import { useEffect,useState } from 'react'
import './App.css'

function App() {
  useEffect(()=>{
    apiTesting();
  },[])

  const apiTesting =()=>{
    fetchDataFromApi("movie/popular")
       .then((res)=>{
        console.log(res);
       })
  }

  return (
    <>
      <div className='App'> App</div>
    </>
  )
}

export default App
