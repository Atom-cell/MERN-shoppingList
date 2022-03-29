import React from "react";
import Box from "@mui/material/Box";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ closeMod, addNewItem }) {
  const [itemName, setItemName] = React.useState("");

  const handleSubmit = (e) => {
    let NewItem = { name: itemName };
    axios
      .post("http://localhost:5000/items/", {
        name: itemName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    addNewItem(NewItem);
    closeMod();
    e.preventDefault();
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={true}
        onClose={() => closeMod()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label>
              Item Name:
              <input
                type="text"
                name="name"
                placeholder="Enter Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </label>
            <input
              type="submit"
              value="Add new Item"
              style={{ marginTop: "3%" }}
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
