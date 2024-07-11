import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const EmployeItem = ({ item, handleUpdate, setShow }) => {
  const navigate = useNavigate();

  const handledetail = (item) => {
    navigate("/empdetail", { state: item });
  };

  const handleDelete = async (_id) => {
    const url = "http://localhost:2070/empdel";
    const payload = { _id };
    if (window.confirm("Are You Sure Want To Delete")) {
      const result = await axios.post(url, payload);
      setShow(result.data);
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
        {item.empid}
      </Grid>

      <Grid
        item
        xs={2}
        sx={{ cursor: "pointer" }}
        onClick={() => handledetail(item)}
      >
        {item.fname.toUpperCase()}
        {item.lname.toUpperCase()}
      </Grid>

      <Grid item xs={2}>
        {item.email}
      </Grid>

      <Grid item xs={2}>
        {item.mobile}
      </Grid>

      <Grid item xs={2}>
        {item.city}
      </Grid>

      <Grid item xs={1}>
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: item.IsActive === true ? "green" : "red",
          }}
        ></div>
      </Grid>
      <Grid item xs={1}>
        <Button
          onClick={() => handleUpdate(item)}
          variant="contained"
          fullWidth
          color="warning"
        >
          Update
        </Button>
      </Grid>

      <Grid item xs={1}>
        <Button
          onClick={() => handleDelete(item._id)}
          variant="contained"
          fullWidth
          color="error"
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};
