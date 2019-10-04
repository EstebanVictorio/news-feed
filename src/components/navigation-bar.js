import styled from "styled-components"
import { Link } from "react-router-dom"
const StyledNavigationBar = styled.nav`
  .navigation-bar__list {
    display: flex;
    list-style-type: none;
  }

  .navigation-bar__list-item {
    margin: 0 12px;
  }
`

const NavigationBar = () => (
  <StyledNavigationBar>
    <ul className="navigation-bar__list">
      <li className="navigation-bar__list-item">
        <Link to="/">Your location country</Link>
      </li>
      <li className="navigation-bar__list-item">
        <Link to="/international">International</Link>
      </li>
    </ul>
  </StyledNavigationBar>
)

export default NavigationBar
