import "isomorphic-fetch"
import MyCountry from "pages/my-country"
import International from "pages/international"
import NavigationBar from "components/navigation-bar"
import GlobalStyles from "utils/global-styles"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const container = document.querySelector("#root")

ReactDOM.render(
  <Router>
    <GlobalStyles />
    <h2 className="news-feed__heading">My news feed</h2>
    <NavigationBar />
    <Switch>
      <Route exact path="/" component={MyCountry} />
      <Route exact path="/international" component={International} />
    </Switch>
  </Router>,
  container
)
