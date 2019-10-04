import styled from "styled-components"
import NewsCard from "components/news-card"

const StyledNews = styled.ul`
  margin: 0;
  display: flex;
  padding: 0 10px;
  max-width: 1024px;
  align-items: center;
  list-style-type: none;
  flex-direction: column;
`

const News = ({ news }) => (
  <StyledNews>
    {news.map(n => (
      <NewsCard {...n} />
    ))}
  </StyledNews>
)

export default News
