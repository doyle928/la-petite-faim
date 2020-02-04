import React, { useState } from "react";
import "./RecrutementJobList.css";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";
import WorkOutlineRoundedIcon from "@material-ui/icons/WorkOutlineRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import InputOne from "./inputs/InputOne";
import InputTwo from "./inputs/InputTwo";

function RecrutementJobList() {
  const styles = {
    icon: {
      fill: "#fff",
      stroke: "none",
      height: 25,
      width: 25,
      margin: "auto",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translateX(-50%) translatey(-50%)"
    },
    storeInfoIcon: {
      fill: "#b4a06e",
      stroke: "none",
      height: 23,
      width: 23
    },
    seeMore: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translateX(-50%) translatey(-50%)",
      height: 70,
      width: 70,
      fill: "#fff",
      stroke: "none",
      opacity: 0.6
    }
  };

  const jobList = [
    {
      id: 0,
      job: `Vendeur / Vendeuse en boulangerie-pâtisserie - La Petite Faim (H/F)`,
      day_posted: 123123,
      department: `37 - Tours`,
      education: null,
      experience: `2 ans d'expérience`,
      work: `CDI`,
      hours: 35
    },
    {
      id: 1,
      job: `Boulanger / Boulangère - La Petite Faim (H/F)`,
      day_posted: 123123,
      department: `37 - Tours`,
      education: `CAP, BEP et équivalents`,
      experience: `2 ans d'expérience`,
      work: `CDI`,
      hours: 35
    },
    {
      id: 2,
      job: `Chef boulanger / boulangère - La Petite Faim (H/F)`,
      day_posted: 123123,
      department: `37 - Tours`,
      education: `CAP, BEP et équivalents`,
      experience: `3 ans d'expérience`,
      work: `CDI`,
      hours: 39
    },
    {
      id: 3,
      job: `Vendeur / Vendeuse en boulangerie-pâtisserie - La Petite Faim (H/F)`,
      day_posted: 123123,
      department: `33 - Bordeaux`,
      education: null,
      experience: `2 ans d'expérience`,
      work: `CDD`,
      hours: 35
    },
    {
      id: 4,
      job: `Responsable Adjoint Vente - La Petite Faim (H/F)`,
      day_posted: 123123,
      department: `33 - Bordeaux`,
      education: null,
      experience: `3 ans d'expérience`,
      work: `CDI`,
      hours: 35
    },
    {
      id: 5,
      job: `Pâtissier-traiteur / Pâtissière-traiteuse - La Petite Faim (H/F)`,
      day_posted: 123123,
      department: `33 - Bordeaux`,
      education: `CAP, BEP et équivalents`,
      experience: `3 ans d'expérience`,
      work: `CDI`,
      hours: 35
    }
  ];
  const [values, setValues] = useState({
    job_keys: null,
    department_keys: null
  });
  return (
    <div className="recrutement-job-list-container">
      <div className="recrutement-job-list-header">
        <div>
          <h2>NOS OFFRES D’EMPLOI</h2>
          <div></div>
        </div>
        <div className="recrutement-job-list-header-input-container">
          <div className="recrutement-job-list-header-input-one">
            <span>
              <WorkOutlineRoundedIcon style={styles.icon} />
            </span>
            <InputOne setValues={setValues} values={values} jobList={jobList} />
          </div>
          <div className="recrutement-job-list-header-input-two">
            <span>
              <LocationOnRoundedIcon style={styles.icon} />
            </span>
            <InputTwo setValues={setValues} values={values} jobList={jobList} />
          </div>
        </div>
      </div>
      <div className="recrutement-job-list-jobs-container">
        <ul>
          {jobList.map(
            (job, i) =>
              (values === null ||
                (values.job_keys === null && values.department_keys === null) ||
                (values.department_keys === null &&
                  values.job_keys !== null &&
                  values.job_keys.indexOf(jobList[i].job) !== -1) ||
                (values.job_keys === null &&
                  values.department_keys !== null &&
                  values.department_keys.indexOf(jobList[i].department) !==
                    -1) ||
                (values.job_keys !== null &&
                  values.department_keys !== null &&
                  values.job_keys.indexOf(jobList[i].job) !== -1 &&
                  values.department_keys.indexOf(jobList[i].department) !==
                    -1)) && (
                <li {...job} key={i}>
                  <div>
                    <h3>{job.job}</h3>
                    <p>Publiè il y a {job.day_posted} jours</p>
                    <div>
                      <div>
                        <span>
                          <LocationOnRoundedIcon style={styles.storeInfoIcon} />
                          &nbsp;
                          <p>{job.department}</p>
                        </span>
                        {job.education !== null && (
                          <span>
                            <SchoolRoundedIcon style={styles.storeInfoIcon} />
                            &nbsp;
                            <p>{job.education}</p>
                          </span>
                        )}
                        <span>
                          <DateRangeRoundedIcon style={styles.storeInfoIcon} />
                          &nbsp;
                          <p>{job.experience}</p>
                        </span>
                      </div>
                      <div>
                        <span>
                          <DescriptionRoundedIcon
                            style={styles.storeInfoIcon}
                          />
                          &nbsp;
                          <p>{job.work}</p>
                        </span>
                        <span>
                          <AccessTimeRoundedIcon style={styles.storeInfoIcon} />
                          &nbsp;
                          <p>{job.hours}H</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="recrutement-job-item-hover">
                    <VisibilityRoundedIcon style={styles.seeMore} />
                  </div>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
}

export default RecrutementJobList;
// (values.job_keys !== null &&
//                 jobList.some(e => values.job_keys.includes(e.job))) ||
//               (values.department_keys !== null &&
//                 jobList.some(e =>
//                   values.department_keys.includes(e.department)
//                 ) && (
