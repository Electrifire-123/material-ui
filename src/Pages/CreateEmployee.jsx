import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {store} from "../store/details"
import { useNavigate } from "react-router-dom";
import { SignalWifiStatusbarConnectedNoInternet4Sharp } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreateEmployee() {
  const classes = useStyles();

  const [studentData, setStudentData] = useState({
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
    id: "",
  });
  
  const [students, setStudents] = useContext(store);

  const handleChange = (e) => {
    setStudentData({...studentData, [e.target.name]:e.target.value})
  }

  const navigate = useNavigate()
  const idnum = students.length+1
  const handleSubmit = (e) => {
    setStudents([...students,{Name,Name,Age:Age,Course:Course,Batch:Batch,id:idnum}])
    navigate('/users')
  };
  const {Name, Age, Course, Batch, id} = studentData;

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create Employee
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="First Name"
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="Age"
                variant="outlined"
                required
                fullWidth
                id="Age"
                label="Age"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='Course'
                variant="outlined"
                required
                fullWidth
                id="Course"
                label="Course"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="Batch"
                variant="outlined"
                required
                fullWidth
                id="Batch"
                label="Batch"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}
