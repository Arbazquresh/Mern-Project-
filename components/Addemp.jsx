import React, { useEffect } from "react";
import {
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  Alert,
} from "@mui/material";
import { Employe } from "./Employe";
import { Switch } from "@mui/material";
import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Addemp = () => {
  const navigate = useNavigate();
  const [empid, setEmpid] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [IsActive, setIsActive] = useState(false);
  const [update, setUpdate] = useState(false);
  const [_id, set_id] = useState("");
  const [vali, setVali] = useState(false);
  const [show, setShow] = useState(""); // TO PRINT THE MSG

  const handleEmployee = async () => {
    if (update === true) {
      const url = "http://localhost:2070/empud";
      const payload = {
        _id,
        empid,
        fname,
        lname,
        email,
        mobile,
        city,
        IsActive,
      };
      const result = await axios.post(url, payload);
      setShow(result.data);

      result.status === 200 && setUpdate(false);
      setEmpid("");
      setFname("");
      setLname("");
      setMobile("");
      setCity("");
      setIsActive(false);
      setTimeout(() => {
        window.location.reload(false);
      }, 5000);
    } else {
      const url = "http://localhost:2070/addemp";
      const payload = { empid, fname, lname, email, mobile, city, IsActive };
      const result = await axios.post(url, payload);
      console.log(result);
      setFname("");
      setLname("");
      setMobile("");
      setCity("");
      setIsActive(false);

      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
    }
  };

  const handleUpdate = (item) => {
    setEmpid(item.empid); // Sabh textfield ki value update krne k liye
    setFname(item.fname);
    setLname(item.lname);
    setEmail(item.email);
    setMobile(item.mobile);
    setCity(item.city);
    setIsActive(item.IsActive);
    set_id(item._id);
    setUpdate(true);
  };

  useEffect(() => {
    setVali(
      fname !== "" &&
        lname !== "" && // for form validation
        email !== "" &&
        empid.length === 5 &&
        mobile.length === 10
    );
  }, [empid, fname, lname, email, mobile]);

  const option = [
    {
      label: "Mumbai",
      value: "Mumbai",
    },

    {
      label: "Pune",
      value: "Pune",
    },

    {
      label: "Hydrabad",
      value: "Hydrabad",
    },

    {
      label: "Chennai",
      value: "Chennai",
    },

    {
      label: "Banglore",
      value: "Banglore",
    },
  ];

  useEffect(() => {
    const emails = localStorage.getItem("email");

    emails || (!emails && navigate("/login"));
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "4px",
          padding: "10px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
              value={empid}
              type="number"
              onChange={(e) => setEmpid(e.target.value)}
              required
              variant="outlined"
              label="Employee Id"
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
              variant="outlined"
              label="First Name"
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
              variant="outlined"
              label="Last Name"
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              label="Email No"
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              variant="outlined"
              label="Mobile No"
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
            <Select onChange={(e) => setCity(e.value)} options={option} />
          </Grid>

          <Grid item xs={2}>
            <Switch
              IsActive={IsActive}
              onClick={() => setIsActive(!IsActive)}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              disabled={update ? "" : !vali}
              onClick={handleEmployee}
              variant="contained"
              fullWidth
            >
              {update ? "update" : "submit"}
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Button variant="outlined" fullWidth>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>

      <br />
      {show && <Alert severity="success">{show}</Alert>}
      <br />

      <Employe setShow={setShow} handleUpdate={handleUpdate} />
    </div>
  );
};
//setshow aur handleupdate ko props bhej k function lga ne ka employe mein
