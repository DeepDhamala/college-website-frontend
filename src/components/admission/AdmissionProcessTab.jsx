import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import "./tabpanel.css";
import { Mail, Telegram } from "@mui/icons-material";
const AdmissionProcessTabCore = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

AdmissionProcessTabCore.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AdmissionProcessTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            indicatorColor="transparent"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Before Applying" {...a11yProps(0)} />
            <Tab label="International Student" {...a11yProps(1)} />
            <Tab label="Admission Process" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <AdmissionProcessTabCore value={value} index={0}>
          <Grid container>
            <Grid item xs="12" md="6">
              <Typography variant="h6" fontWeight={"bolder"}>
                Eligibility
              </Typography>
              <ul type="disc">
                <li>Completed HighSchool Education or Equivalant degree</li>
                <li>Should have enough merit points on Entrance Exam</li>
                <li>Should have minimum thershold GPA in PCM defined by NEC</li>
                <li>Should have completed enough(145) credit hours</li>
              </ul>
            </Grid>
          </Grid>
        </AdmissionProcessTabCore>
        <AdmissionProcessTabCore value={value} index={1}>
          <Grid container>
            <Grid item xs="12" md="6">
              <Typography variant="h6" fontWeight={"bolder"}>
                Eligibility
              </Typography>
              <ul type="disc">
                <li>Completed HighSchool Education or Equivalant degree</li>
                <li>Should have enough merit points on Entrance Exam</li>
                <li>Should have minimum thershold GPA in PCM defined by NEC</li>
                <li>Should have completed enough(145) credit hours</li>
              </ul>
            </Grid>
          </Grid>
        </AdmissionProcessTabCore>
        <AdmissionProcessTabCore value={value} index={2}>
          <Grid container>
            <Grid item xs="12" md="6">
              <Typography variant="h6" fontWeight={"bolder"}>
                Eligibility
              </Typography>
              <ul type="disc">
                <li>Completed HighSchool Education or Equivalant degree</li>
                <li>Should have enough merit points on Entrance Exam</li>
                <li>Should have minimum thershold GPA in PCM defined by NEC</li>
                <li>Should have completed enough(145) credit hours</li>
              </ul>
            </Grid>
          </Grid>
        </AdmissionProcessTabCore>
        <Grid container xs={4}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              endIcon={<Telegram />}
              color={"secondary"}
            >
              Apply Now
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" endIcon={<Mail />} color={"secondary"}>
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Box>
      
    </>
  );
};

export default AdmissionProcessTab;
