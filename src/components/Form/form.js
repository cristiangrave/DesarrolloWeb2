import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./form.scss";
import { useDispatch } from "react-redux";
import { addGoal } from "../../reducers/goalsSlice";
import { addTodo } from "../../reducers/todoSlice";
import { useRef } from "react";
function Formulario() {
  const inputRefName = useRef();
  const inputRefDescripcion = useRef();
  const inputRefDueDate = useRef();

  const dispapatch = useDispatch();
  const addItem = (e) => {
    e.preventDefault();
    dispapatch(
      addGoal({
        title: inputRefName.current.value,
        description: inputRefDescripcion.current.value,
        dueDate: inputRefDueDate.current.value,
      })
    );
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name Task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Write name for Task"
          ref={inputRefName}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control
          type="text"
          placeholder="Descripcion"
          ref={inputRefDescripcion}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Date Limit for Complete</Form.Label>
        <Form.Control type="date" ref={inputRefDueDate} />
      </Form.Group>
      <Button variant="info" onClick={addItem}>
        Guardar
      </Button>
    </Form>
  );
}

export default Formulario;
