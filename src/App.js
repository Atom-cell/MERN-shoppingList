import React from "react";
import "./App.css";
import axios from "axios";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Modal";
import AppNavBar from "./AppNavBar";
function App() {
  const [list, setList] = React.useState([]);

  // { name: "milk", uid: uuidv4() },
  //   { name: "eggs", uid: uuidv4() },
  //   { name: "bread", uid: uuidv4() },

  React.useEffect(() => {
    axios.get("http://localhost:5000/items/").then((res) => setList(res.data));
  }, []);

  const [mod, setMod] = React.useState(false);

  const closeMod = () => {
    setMod(false);
  };

  const addNewItem = (newItem) => {
    setList([...list, newItem]);
  };

  const del = (id) => {
    axios.delete(`http://localhost:5000/items/${id}`);
    setList(list.filter((listItem) => listItem._id !== id));
  };
  return (
    <div className="App">
      <AppNavBar />
      <div>
        <Button
          color="secondary"
          onClick={() => setMod(true)}
          className="addBtn"
        >
          Add New Item
        </Button>
        <div>
          {list.map((l) => {
            return (
              <div className="Item">
                <Button color="danger" onClick={() => del(l._id)}>
                  X
                </Button>
                <h5 className="ItemName">{l.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
      {mod ? <Modal closeMod={closeMod} addNewItem={addNewItem} /> : null}
    </div>
  );
}

export default App;
