import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {
  withStyles,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import { brown } from "@material-ui/core/colors";

const SelectBoulangerie = params => {
  const FormControlStyled = withStyles({
    root: {
      width: "100%",
      margin: "0 6px;",
      "& label": {
        fontFamily: `'Poppins', sans- serif;`,
        padding: "0px 4px 10px;",
        color: "rgba(0,0,0,.3);",
        transform: "translate(0, 20px) scale(1);",
        whiteSpace: "nowrap",
        fontSize: "14px;",
        fontWeight: "400",
        overflow: "hidden"
      },
      "& input": {
        fontFamily: `'Poppins', sans- serif;`,
        padding: "6px 4px 7px;",
        fontSize: "14px;",
        color: "#444",
        fontWeight: "400",
        textAlign: "left;"
      },
      "& .MuiSelect-select": {
        textAlign: "left;"
      },
      "& label + .MuiInput-formControl": {
        marginTop: "14px;"
      },
      "& .MuiInputLabel-shrink": {
        transform: "translate(0, 1.5px) scale(0.75);",
        transformOrigin: "transform-origin: top left;"
      },
      "& .MuiInputBase-root": {},

      "& label.Mui-focused": {
        color: "#b19f6f;"
      },
      "& .MuiSelect-select:focus": {
        backgroundColor: "transparent;"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#b19f6f;"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#b19f6f"
        },
        "&:hover fieldset": {
          borderColor: "#b19f6f"
        },
        "&.Mui-focused fieldset": {
          borderColor: "#b19f6f"
        }
      }
    }
  })(FormControl);

  const theme = createMuiTheme({
    palette: {
      primary: brown
    }
  });

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing(0)
    }
  }));

  const classes = useStyles();

  const [getValue, setValue] = useState("");

  const handleInputChangeBoulangerie = e => {
    params.getBoulangerie(e.target.value);
    setValue(e.target.value);
  };

  const stores = [
    {
      id: 0,
      city: "Bordeaux (Libourne)"
    },
    {
      id: 1,
      city: "Tours (Joué-Lès-Tours)"
    },
    {
      id: 2,
      city: "Tours (Saint-Cyr-sur Loire)"
    }
  ];
  return (
    <>
      <FormControlStyled>
        <InputLabel id="demo-simple-select-required-label">
          Sélectionnez une boulangerie
        </InputLabel>
        <Select
          labelId="recrutement-apply-boulangerie-label"
          id="recrutement-apply-boulangerie"
          className={classes.margin}
          className="recrutement-apply-form-input"
          value={getValue}
          onChange={handleInputChangeBoulangerie}
        >
          {stores.map((store, i) => (
            <MenuItem key={i} {...store} value={store.city}>
              {store.city}
            </MenuItem>
          ))}
        </Select>
      </FormControlStyled>
    </>
  );
};

export default SelectBoulangerie;
