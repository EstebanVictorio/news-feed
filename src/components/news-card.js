import styled from "styled-components"

const StyledNewsCard = styled.div`
  width: 400px;
  margin: 24px;
  padding: 24px;
  height: fit-content;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid darkslategray;
  background-color: whitesmoke;
  width: 100%;
  .news-pic__container {
    margin: 0;
    padding: 0;
    width: 200px;
    height: 150px;
  }

  .news-pic {
    width: 100%;
    height: 100%;
  }
`

const NewsCard = ({ url, title, description, urlToImage }) => (
  <StyledNewsCard>
    <figure className="news-pic__container">
      <img className="news-pic" src={urlToImage} />
    </figure>
    <h2>{title}</h2>
    <a rel="noopener noreferrer" href={url} target="_blank">
      See details here
    </a>
  </StyledNewsCard>
)

export default NewsCard
