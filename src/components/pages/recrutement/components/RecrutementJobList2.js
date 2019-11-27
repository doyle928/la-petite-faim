import React, { useCallback, useState, useEffect } from "react";
import "./RecrutementJobList.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";
import logo from "../../../../styles/images/header/logo.png";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function RecrutementJobList2() {
  const jobList = [
    {
      id: 0,
      job: `Vendeur / Vendeuse en boulangerie-pâtisserie - La Petite Faim (H/F)`,
      day_posted: 123123,
      department: `37 - Tours`,
      education: null,
      experience: `2 ans d'expérience`,
      work: `CDI`,
      hours: `35H`
    },
    {
      id: 1,
      job: `Boulanger / Boulangère - La Petite Faim (H/F)`,
      day_posted: 123123,
      department: `37 - Tours`,
      education: `CAP, BEP et équivalents`,
      experience: `2 ans d'expérience`,
      work: `CDI`,
      hours: `35H`
    },
    {
      id: 2,
      job: `Chef boulanger / boulangère - La Petite Faim (H/F)`,
      day_posted: 123123,
      department: `37 - Tours`,
      education: `CAP, BEP et équivalents`,
      experience: `3 ans d'expérience`,
      work: `CDI`,
      hours: `39H`
    },
    {
      id: 3,
      job: `Vendeur / Vendeuse en boulangerie-pâtisserie - La Petite Faim (H/F)`,
      day_posted: 123123,
      department: `33 - Bordeaux`,
      education: null,
      experience: `2 ans d'expérience`,
      work: `CDD`,
      hours: `35H`
    },
    {
      id: 4,
      job: `Responsable Adjoint Vente - La Petite Faim (H/F)`,
      day_posted: 123123,
      department: `33 - Bordeaux`,
      education: null,
      experience: `3 ans d'expérience`,
      work: `CDI`,
      hours: `35H`
    },
    {
      id: 5,
      job: `Pâtissier-traiteur / Pâtissière-traiteuse - La Petite Faim (H/F)`,
      day_posted: 123123,
      department: `33 - Bordeaux`,
      education: `CAP, BEP et équivalents`,
      experience: `3 ans d'expérience`,
      work: `CDI`,
      hours: `35H`
    }
  ];

  //   let uniq = a => [...new Set(a).department];
  const uniq = a => {
    let seen = {};
    return a.filter(function(item) {
      return seen.hasOwnProperty(item.department)
        ? false
        : (seen[item.department] = true);
    });
  };

  console.log(uniq(jobList));

  const [values, setValues] = useState({
    job_keys: null,
    department_keys: null
  });
  console.log(values);
  return (
    <div>
      <Autocomplete
        multiple
        id="tags-standard"
        options={jobList}
        getOptionLabel={option => option.job}
        renderInput={params => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
            margin="normal"
            fullWidth
            ref={params.InputProps.ref}
            inputProps={params.inputProps}
            onClick={() => {
              console.log(params.inputProps.startAdornment);
              if (params.InputProps.startAdornment !== undefined) {
                setValues({
                  ...values,
                  job_keys: params.InputProps.startAdornment
                });
                console.log(values);
              }
            }}
          />
        )}
      />
      <Autocomplete
        multiple
        id="tags-outlined"
        options={uniq(jobList)}
        getOptionLabel={option => option.department}
        filterSelectedOptions
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="filterSelectedOptions"
            placeholder="Favorites"
            margin="normal"
            fullWidth
            onClick={() => {
              if (params.InputProps.startAdornment !== undefined) {
                setValues({
                  ...values,
                  department_keys: params.InputProps.startAdornment
                });
                console.log(values);
              }
            }}
          />
        )}
      />
    </div>
  );
}

export default RecrutementJobList2;
