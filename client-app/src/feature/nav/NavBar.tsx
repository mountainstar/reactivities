import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface IProps {
  openCreateFrom: () => void;
}

const NavBar: React.FC<IProps> = ({ openCreateFrom }) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img src="assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Reactivities
        </Menu.Item>
        <Menu.Item name="messages" />
        <Menu.Item>
          <Button onClick={openCreateFrom} positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
