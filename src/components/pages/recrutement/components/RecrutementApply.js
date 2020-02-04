import React, { useState } from "react";
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
  withStyles,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import { brown } from "@material-ui/core/colors";
import FormControl from "@material-ui/core/FormControl";
import Files from "react-butterfiles";
import fakeCaptch from "../../../../styles/images/fake_captcha.png";
import InputDatePicker from "./inputs/InputDatePicker";
import SelectBoulangerie from "./inputs/SelectBoulangerie";

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

  // const [index, setIndex] = useState(null);
  const [getFile, setFile] = useState(null);

  const getDate = date => {
    if (date && date.length > 0) {
      return date;
    } else {
      return "";
    }
  };

  const getBoulangerie = date => {
    if (date && date.length > 0) {
      return date;
    } else {
      return "";
    }
  };

  const removeClasses = () => {
    let nodes = document.querySelectorAll(".apply-form-icons");
    for (let node = 0; node < nodes.length; node++) {
      if (
        nodes[node].className.baseVal.indexOf("recrutement-active-icon") >= 0
      ) {
        nodes[node].classList.remove("recrutement-active-icon");
      }
    }
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
            <span
              className="recrutement-apply-form-section recrutement-apply-form-section-flex"
              onClick={async () => {
                await removeClasses();
                let node = document.querySelector(".prenom");
                node.classList.add("recrutement-active-icon");
              }}
            >
              <AccountCircleRoundedIcon
                style={styles.formIcon}
                className={`prenom apply-form-icons`}
              />
              <CssTextField
                className={classes.margin}
                id="recrutement-apply-prenom"
                className="recrutement-apply-form-input"
                label="Prénom"
              />
            </span>
            <span
              className="recrutement-apply-form-section recrutement-apply-form-section-flex"
              onClick={() => {
                removeClasses();
                let node = document.querySelector(".nom");
                node.classList.add("recrutement-active-icon");
              }}
            >
              <AccountBoxRoundedIcon
                style={styles.formIcon}
                className={`nom apply-form-icons`}
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
            <span
              className="recrutement-apply-form-section recrutement-apply-form-section-flex"
              onClick={() => {
                removeClasses();
                let node = document.querySelector(".phone");
                node.classList.add("recrutement-active-icon");
              }}
            >
              <PhoneRoundedIcon
                style={styles.formIcon}
                className={`phone apply-form-icons`}
              />
              <CssTextField
                className={classes.margin}
                id="recrutement-apply-telephone"
                className="recrutement-apply-form-input"
                label="Téléphone"
              />
            </span>
            <span
              className="recrutement-apply-form-section recrutement-apply-section-email recrutement-apply-form-section-flex"
              onClick={() => {
                removeClasses();
                let node = document.querySelector(".email");
                node.classList.add("recrutement-active-icon");
              }}
            >
              <EmailRoundedIcon
                style={styles.formIcon}
                className={`email apply-form-icons`}
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
            <span
              className="recrutement-apply-form-section recrutement-apply-form-section-flex"
              onClick={() => {
                removeClasses();
                let node = document.querySelector(".poste");
                node.classList.add("recrutement-active-icon");
              }}
            >
              <WorkRoundedIcon
                style={styles.formIcon}
                className={`poste apply-form-icons`}
              />
              <CssTextField
                className={classes.margin}
                id="recrutement-apply-poste"
                className="recrutement-apply-form-input"
                label="Poste"
              />
            </span>
            <span
              className="recrutement-apply-form-section recrutement-apply-form-section-flex"
              onClick={() => {
                removeClasses();
                let node = document.querySelector(".date");
                node.classList.add("recrutement-active-icon");
              }}
            >
              <DateRangeRoundedIcon
                style={styles.formIcon}
                className={`date apply-form-icons`}
              />
              <InputDatePicker getDate={getDate} />
            </span>
          </div>
          <div
            className="recrutement-apply-form-section recrutement-apply-form-boulangerie"
            onClick={() => {
              removeClasses();
              let node = document.querySelector(".boulangerie");
              node.classList.add("recrutement-active-icon");
            }}
          >
            <StoreRoundedIcon
              style={styles.formIcon}
              className={`boulangerie apply-form-icons`}
            />
            <SelectBoulangerie getBoulangerie={getBoulangerie} />
          </div>
          <div
            className="recrutement-apply-form-section recrutement-apply-form-subjet"
            onClick={() => {
              removeClasses();
              let node = document.querySelector(".subjet");
              node.classList.add("recrutement-active-icon");
            }}
          >
            <LabelImportantRoundedIcon
              style={styles.formIcon}
              className={`subjet apply-form-icons`}
            />
            <CssTextField
              className={classes.margin}
              id="recrutement-apply-subjet"
              className="recrutement-apply-form-input"
              label="Subjet"
            />
          </div>
          <div
            className="recrutement-apply-form-section recrutement-apply-form-message"
            onClick={() => {
              removeClasses();
              let node = document.querySelector(".message");
              node.classList.add("recrutement-active-icon");
            }}
          >
            <InsertCommentRoundedIcon
              style={styles.formIcon}
              className={`message apply-form-icons`}
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
          <div className="custom-file-one">
            <Files
              multiple={false}
              maxSize="10mb"
              accept={["application/pdf", "image/jpg", "image/jpeg"]}
              onSuccess={file1 => setFile({ ...getFile, file1: file1 })}
              onError={error1 => setFile({ ...getFile, error1: error1 })}
            >
              {({ browseFiles }) => (
                <>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      browseFiles();
                    }}
                  ></button>
                  <div>
                    <span>
                      <p>CV *</p>
                    </span>
                    {getFile !== null && "file1" in getFile && (
                      <p key={getFile.file1[0].name}>{getFile.file1[0].name}</p>
                    )}
                    {getFile !== null && getFile.error1 && (
                      <p key={getFile.error1.file.name}>
                        {getFile.error1.file.name} - {getFile.error1.type}
                      </p>
                    )}
                    {getFile === null && <p></p>}
                  </div>
                </>
              )}
            </Files>
          </div>
          <div className="custom-file-two">
            <Files
              multiple={false}
              maxSize="10mb"
              accept={["application/pdf", "image/jpg", "image/jpeg"]}
              onSuccess={file2 => setFile({ ...getFile, file2: file2 })}
              onError={error2 => setFile({ ...getFile, error2: error2 })}
            >
              {({ browseFiles }) => (
                <>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      browseFiles();
                    }}
                  ></button>
                  <div>
                    <span>
                      <p>LETTRE DE MOTIVATION</p>
                    </span>
                    {getFile !== null && "file2" in getFile && (
                      <p key={getFile.file2[0].name}>{getFile.file2[0].name}</p>
                    )}
                    {getFile !== null && getFile.error2 && (
                      <p key={getFile.error2.file.name}>
                        {getFile.error2.file.name} - {getFile.error2.type}
                      </p>
                    )}
                    {getFile === null && <p></p>}
                  </div>
                </>
              )}
            </Files>
          </div>
          <div className="recrutement-apply-form-fake-captcha">
            <img src={fakeCaptch} />
          </div>
          <div className="recrutement-apply-form-submit">
            <button type="submit" className="recrutement-form-submit">
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecrutementApply;
