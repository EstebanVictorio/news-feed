import styled from "styled-components"
import { Link } from "react-router-dom"
const StyledNavigationBar = styled.nav`
  .navigation-bar__list {
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
  }

  .navigation-bar__list-item {
    margin: 12px;
  }

  .navigation-bar__link {
    padding: 5px;
    font-size: 22px;
    font-weight: bold;
    box-sizing: border-box;
    border: 1px solid whitesmoke;
    border-top-right-radius: 15px;
  }

  .navigation-bar__link:visited {
    color: whitesmoke;
  }
`

const NavigationBar = () => (
  <StyledNavigationBar>
    <ul className="navigation-bar__list">
      <li className="navigation-bar__list-item">
        <Link className="navigation-bar__link" to="/">
          Your location country
        </Link>
      </li>
      <li className="navigation-bar__list-item">
        <Link className="navigation-bar__link" to="/international">
          International
        </Link>
      </li>
    </ul>
  </StyledNavigationBar>
)

export default NavigationBar
