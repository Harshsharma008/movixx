import React, {useState} from 'react'
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper'
import "../style.scss"
import SwitchTabs from '../../../Components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/UseFetch'
import Carousel from '../../../Components/carousel/Carousel'
const Trending = () => {
  const [endPoint, setEndPoint] = useState("day")

  const {data,loading} = useFetch(`/trending/all/${endPoint}`)
  const onTabChange=(tab)=>{
    setEndPoint(tab==="Day"? "day" : "week");
  }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
      <span className="carouselTitle">Trending</span>
      <SwitchTabs data={[ "Day", "Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.result} loading={loading}/>
      
      </div>
  )
}

export default Trending