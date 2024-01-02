import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card, Button } from "react-bootstrap";
import Name from "./components/name";
import Price from "./components/price";
import Path from "./components/path";
import Description from "./components/description";
import Greet from "./components/greet";
function App() {
  return (
    <div>
      <Card style={{ width: "20rem" }}>
        <Path />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Price />
          <Description />
          <Button variant="primary">Home page</Button>
        </Card.Body>
      </Card>
      <Greet />
    </div>
  );
}

export default App;
