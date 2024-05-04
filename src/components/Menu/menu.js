import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { changeOption } from "../../reducers/optionSlice";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./menu.css";
/* import {changeOption} from '../../reducers/optionSlice' */

function Menu() {
  const option = useSelector((stage) => stage.option.value);
  const dispatch = useDispatch();
  const changeOptionFunc = (e) => {
    e.preventDefault();
    if (option === "tasks") {
      dispatch(changeOption("goals"));
    } else {
      dispatch(changeOption("tasks"));
    }
  };

  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark">
      <Container>
        <Navbar.Brand>Lista de Tareas por Cumplir</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link onClick={changeOptionFunc}>Task</Nav.Link>
            <Nav.Link onClick={changeOptionFunc}>Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
