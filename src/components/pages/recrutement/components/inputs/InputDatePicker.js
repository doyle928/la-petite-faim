import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import {
  withStyles,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import { brown } from "@material-ui/core/colors";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
registerLocale("fr", fr);
setDefaultLocale(fr);

const InputDatePicker = params => {
  const CssTextField = withStyles({
    root: {
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
        fontWeight: "400"
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
  })(TextField);

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

  const handleInputChangeDate = e => {
    params.getDate(e);
    setValue(e);
  };
  return (
    <>
      <CssTextField
        className={classes.margin}
        id="recrutement-apply-date"
        className="recrutement-apply-form-input"
        label="Date de disponibilité"
        value={getValue === "" ? "" : " "}
        key="date"
      />
      <DatePicker
        selected={getValue}
        onChange={e => handleInputChangeDate(e)}
        locale="fr"
        dateFormat="dd MMMM, yyyy"
      />
    </>
  );
};

export default InputDatePicker;
