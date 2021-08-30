import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import EventDetails from "./events/details";
import Features from "./features";
import Home from "./home";
import MemberAdd from "./members/add";
import MemberList from "./members/list";

function Body() {
  return (
    <>
      <Switch>
        <Route path="/add-member">
          <MemberAdd />
        </Route>
        <Route path="/event-details" exact>
          <EventDetails />
        </Route>
        <Route path="/new-features" exact>
          <Features />
        </Route>
        <Route path="/members">
          <MemberList />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default Body;
