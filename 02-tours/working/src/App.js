import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])
  async function fetchTours() {
    const response = await fetch(url)
    const toursData = await response.json()
    console.log(toursData)
    setTours(toursData)
    setIsLoading(false)
  }
  function removeTour(e) {
    const tourId = e.target.dataset.tourId
    const newTours = tours.filter((tour)=> {
      return tour.id != tourId
    })
    setTours(newTours)
  }

  function refreshTours() {
    setIsLoading(true)
  }

  useEffect(()=> {
    if(isLoading) {
      fetchTours()
    }
  },[isLoading])

  if(isLoading) {
    return <Loading />
  } else {
    return (
        <main>
          <Tours tours={tours} removeHandler={removeTour} refreshHandler={refreshTours}/>
        </main>
    )
  }
}

export default App
