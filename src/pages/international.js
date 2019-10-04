import News from "components/news"
import { getNewsByCountry } from "services/news"
import { useState, useEffect } from "react"
import CountrySelector from "components/country-selector"

const countries = [
  {
    code: "us",
    name: "USA"
  },
  {
    code: "ru",
    name: "Russia"
  },
  {
    code: "br",
    name: "Brazil"
  }
]

const International = () => {
  const [news, setNews] = useState([])
  const [currentCountry, setCurrentCountry] = useState("us")

  const getNewsByCountryEffect = () => {
    console.log("Run effect on international")
    const fetchNews = async () => {
      const results = await getNewsByCountry(currentCountry)
      setNews(results)
    }

    fetchNews()
  }

  useEffect(getNewsByCountryEffect, [currentCountry])

  return (
    <main className="main-content">
      <CountrySelector
        countries={countries}
        setCurrentCountry={setCurrentCountry}
      />
      <News news={news} />
    </main>
  )
}

export default International
