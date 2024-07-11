import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

export const Dashboard = () => {
  const mydata = useLocation();
  const data = mydata.state;
  console.log(data, "..............");

  const active = data.filter((item) => item.IsActive === true);
  const deactive = data.filter((item) => item.IsActive === false);
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Card sx={{ bgcolor: "lightblue" }}>
          <CardContent>
            <h1>Total Employee</h1>
            <hr />
            <h1>{data.length}</h1>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card sx={{ bgcolor: "green" }}>
          <CardContent>
            <h1>Active Employee</h1>
            <hr />
            <h1>{active.length}</h1>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ bgcolor: "red" }}>
          <CardContent>
            <h1>De-Active Employee</h1>
            <hr />
            <h1>{deactive.length}</h1>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
