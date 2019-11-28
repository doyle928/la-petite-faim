import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./RecrutementApply.css";
import TextField from "@material-ui/core/TextField";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import StoreRoundedIcon from "@material-ui/icons/StoreRounded";
import LabelImportantRoundedIcon from "@material-ui/icons/LabelImportantRounded";
import InsertCommentRoundedIcon from "@material-ui/icons/InsertCommentRounded";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import { brown } from "@material-ui/core/colors";
import bsCustomFileInput from "bs-custom-file-input";

function RecrutementApply() {
  const styles = {
    formIcon: {
      fill: "#444",
      stroke: "none",
      height: 32,
      width: 32
    }
  };

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

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing(0)
    }
  }));

  const theme = createMuiTheme({
    palette: {
      primary: brown
    }
  });

  const classes = useStyles();

  const [index, setIndex] = useState(null);
  const idList = [
    "recrutement-apply-prenom",
    "recrutement-apply-nom",
    "recrutement-apply-telephone",
    "recrutement-apply-email",
    "recrutement-apply-poste",
    "recrutement-apply-date",
    "recrutement-apply-boulangerie",
    "recrutement-apply-subjet",
    "recrutement-apply-message"
  ];
  let el = null;

  document.addEventListener(
    "focusin",
    () => {
      if ("id" in document.activeElement) {
        if (
          document.activeElement.id === "recrutement-apply-prenom" ||
          document.activeElement.id === "recrutement-apply-nom" ||
          document.activeElement.id === "recrutement-apply-telephone" ||
          document.activeElement.id === "recrutement-apply-email" ||
          document.activeElement.id === "recrutement-apply-poste" ||
          document.activeElement.id === "recrutement-apply-date" ||
          document.activeElement.id === "recrutement-apply-boulangerie" ||
          document.activeElement.id === "recrutement-apply-subjet" ||
          document.activeElement.id === "recrutement-apply-message"
        ) {
          changeIcon(document.activeElement.id);
        }
      }
    },
    true
  );

  const changeIcon = el => {
    for (let i = 0; i < idList.length; i++) {
      if (idList[i] === el) {
        setIndex(i);
      }
    }
    document.getElementById(el).focus();
  };

  return (
    <div className="recrutement-apply-container">
      <div className="recrutement-apply-top-border"></div>
      <div className="recrutement-apply-header">
        <h2>ENVOYEZ-NOUS VOTRE CANDIDATURE</h2>
        <div></div>
      </div>
      <div className="recrutement-apply-form-container">
        <form className={classes.root} noValidate autoComplete="off">
          <div className="recrutement-apply-form-name">
            <span className="recrutement-apply-form-section">
              <AccountCircleRoundedIcon
                style={styles.formIcon}
                className={`${index === 0 ? "recrutement-active-icon" : ""}`}
              />
              <CssTextField
                className={classes.margin}
                id="recrutement-apply-prenom"
                className="recrutement-apply-form-input"
                label="Prénom"
              />
            </span>
            <span className="recrutement-apply-form-section">
              <AccountBoxRoundedIcon
                style={styles.formIcon}
                className={`${index === 1 ? "recrutement-active-icon" : ""}`}
              />
              <CssTextField
                className={classes.margin}
                id="recrutement-apply-nom"
                className="recrutement-apply-form-input"
                label="Nom"
              />
            </span>
          </div>
          <div className="recrutement-apply-form-contact">
            <span className="recrutement-apply-form-section">
              <PhoneRoundedIcon
                style={styles.formIcon}
                className={`${index === 2 ? "recrutement-active-icon" : ""}`}
              />
              <CssTextField
                className={classes.margin}
                id="recrutement-apply-telephone"
                className="recrutement-apply-form-input"
                label="Téléphone"
              />
            </span>
            <span className="recrutement-apply-form-section recrutement-apply-section-email">
              <EmailRoundedIcon
                style={styles.formIcon}
                className={`${index === 3 ? "recrutement-active-icon" : ""}`}
              />
              <CssTextField
                className={classes.margin}
                id="recrutement-apply-email"
                className="recrutement-apply-form-input"
                label="E-mail"
              />
            </span>
          </div>
          <div className="recrutement-apply-form-job-date">
            <span className="recrutement-apply-form-section">
              <WorkRoundedIcon
                style={styles.formIcon}
                className={`${index === 4 ? "recrutement-active-icon" : ""}`}
              />
              <CssTextField
                className={classes.margin}
                id="recrutement-apply-poste"
                className="recrutement-apply-form-input"
                label="Poste"
              />
            </span>
            <span className="recrutement-apply-form-section">
              <DateRangeRoundedIcon
                style={styles.formIcon}
                className={`${index === 5 ? "recrutement-active-icon" : ""}`}
              />
              <CssTextField
                className={classes.margin}
                id="recrutement-apply-date"
                className="recrutement-apply-form-input"
                label="Date de disponibilité"
              />
            </span>
          </div>
          <div className="recrutement-apply-form-section recrutement-apply-form-boulangerie">
            <StoreRoundedIcon
              style={styles.formIcon}
              className={`${index === 6 ? "recrutement-active-icon" : ""}`}
            />
            <CssTextField
              className={classes.margin}
              id="recrutement-apply-boulangerie"
              className="recrutement-apply-form-input"
              label="Sélectionnez une boulangerie"
            />
          </div>
          <div className="recrutement-apply-form-section recrutement-apply-form-subjet">
            <LabelImportantRoundedIcon
              style={styles.formIcon}
              className={`${index === 7 ? "recrutement-active-icon" : ""}`}
            />
            <CssTextField
              className={classes.margin}
              id="recrutement-apply-subjet"
              className="recrutement-apply-form-input"
              label="Sujet"
            />
          </div>
          <div className="recrutement-apply-form-section recrutement-apply-form-message">
            <InsertCommentRoundedIcon
              style={styles.formIcon}
              className={`${index === 8 ? "recrutement-active-icon" : ""}`}
            />
            <CssTextField
              className={classes.margin}
              id="recrutement-apply-message"
              label="Tapez votre message ici..."
              className="recrutement-apply-form-input"
              multiline
              rows="4"
            />
          </div>
          <div className="custom-file">
            <bsCustomFileInput />
            {/* <span>
                          <p>CV*</p>
                      </span>
                      <div></div> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecrutementApply;
