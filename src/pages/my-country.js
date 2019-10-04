import { useState, useEffect } from "react"
import { getHeadlines } from "services/news"
import News from "components/news"

const MyCountry = () => {
  const [headlines, setHeadLines] = useState([])

  const getHeadlinesEffect = () => {
    console.log("Running effect")
    const fetchHeadlines = async () => {
      if (!headlines.length) {
        const newHeadLines = await getHeadlines()
        setHeadLines(newHeadLines)
      }
    }
    fetchHeadlines()
  }

  useEffect(getHeadlinesEffect, [])

  return (
    <main className="main-content">
      <News news={headlines} />
    </main>
  )
}

export default MyCountry
