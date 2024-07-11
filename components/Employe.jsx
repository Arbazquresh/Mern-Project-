import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { EmployeItem } from "./EmployeItem";
import { useNavigate } from "react-router-dom";

export const Employe = ({ handleUpdate, item, setShow }) => {
  const [data, setData] = useState([]);
  const [pagi, setPagi] = useState(4);

  const navigate = useNavigate();

  const getApi = async () => {
    const result = await axios.get("http://localhost:2070/getemp");
    setData(result.data);
  };
  useEffect(() => {
    getApi();
  }, []);

  const handleprevious = () => {
    if (pagi > 5) {
      setPagi(pagi - 4);
    }
  };

  const handleforward = () => {
    if (pagi < data.length) {
      setPagi(pagi + 4);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <b>Emp Id</b>
              </Grid>

              <Grid item xs={2}>
                <b>Full Name</b>
              </Grid>

              <Grid item xs={2}>
                <b>Email Id</b>
              </Grid>

              <Grid item xs={2}>
                <b>Mobile No</b>
              </Grid>

              <Grid item xs={2}>
                <b>City</b>
              </Grid>

              <Grid item xs={1}>
                <b>Status</b>
              </Grid>

              <Grid item xs={0.5}></Grid>

              <Grid item xs={1}>
                <b>Action</b>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {data.slice(pagi - 4, pagi).map((item) => (
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <EmployeItem
                setShow={setShow}
                item={item}
                handleUpdate={handleUpdate}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item xs={2}>
        <Button
          style={{ display: pagi <= 5 ? "none" : "block" }}
          onClick={handleprevious}
          variant="contained"
          fullWidth
        >
          Previous
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => navigate("/dashboard", { state: data })}
          fullWidth
          color="warning"
          variant="contained"
        >
          Dashboard
        </Button>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}>
        <Button
          style={{ display: pagi >= data.length ? "none" : "block" }}
          onClick={handleforward}
          variant="contained"
          fullWidth
        >
          Forward
        </Button>
      </Grid>
    </Grid>
  );
};
