import { API_KEY, API_URL, HEADLINES_API_URL } from "utils/constants"

const getNewsByCountry = async country => {
  const response = await fetch(
    `${HEADLINES_API_URL}?apiKey=${API_KEY}&country=${country}`
  )
  const { articles } = await response.json()
  return articles
}

const getHeadlines = async () => {
  const response = await fetch(
    `${HEADLINES_API_URL}?apiKey=${API_KEY}&country=mx`
  )
  const { articles } = await response.json()
  return articles
}

export { getHeadlines, getNewsByCountry }
