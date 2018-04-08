import React from 'react'
import { Link } from 'react-router-dom'
import UserProfile from './UserProfile'
import { Menu, Container } from 'semantic-ui-react'

const NavBar = props => (
  <Menu
    fixed={props.fixed ? "top" : null}
    inverted={!props.fixed}
    secondary={!props.fixed}
    borderless
  >
    <Container>
      <Menu.Item as="a" header id="logo" content="Etherfund" />
      <Link
        className={`item ${props.active === "home" ? "active" : ""}`}
        to="/"
      >
        {"Home"}
      </Link>
      <Link
        className={`item ${props.active === "explore" ? "active" : ""}`}
        to="/explore"
      >
        {"Explore"}
      </Link>
      <Link
        className={`item ${props.active === "about" ? "active" : ""}`}
        to="/about"
      >
        {"About Us"}
      </Link>
      <Link
        className={`right item ${props.active === "campaign" ? "active" : ""}`}
        to="/campaign"
      >
        {"Start a Campaign"}
      </Link>
      <Menu.Item position="right">
        <UserProfile fixed={props.fixed} />
      </Menu.Item>
    </Container>
  </Menu>
);


export default NavBar
