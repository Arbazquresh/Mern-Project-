import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

export const Empdetail = () => {
  const mydata = useLocation();
  const data = mydata.state;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <img
                  style={{ width: "200px" }}
                  src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={6}>
                <h1>{`${data.fname} ${data.lname}`}</h1>
                <h3>{data.email}</h3>
                <h3>{data.mobile}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit mollitia vero, rerum neque debitis enim assumenda
                  recusandae quae labore excepturi error aliquam omnis soluta
                  vitae illum? Voluptatum sapiente voluptates ea saepe eos,
                  tempora veniam cupiditate odio optio quidem ipsam, obcaecati
                  totam consectetur dolorem nesciunt? Quisquam nihil aspernatur
                  ullam consectetur. Quae.
                </p>
              </Grid>
              <Grid item xs={3}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: data.IsActive ? "green" : "red",
                  }}
                ></div>
                <h1>{data.IsActive ? "Active" : "De-Active"}</h1>
                <h2>{data.city}</h2>
                <h3>{data.empid}</h3>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
