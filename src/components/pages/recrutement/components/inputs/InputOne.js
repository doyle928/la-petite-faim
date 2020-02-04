import React, { useEffect } from "react";
import "../RecrutementJobList.css";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import CheckIcon from "@material-ui/icons/Check";
import {
  InputWrapper,
  Tag,
  Listbox
} from "../../../../../styled-components/recrutement/styled";

const InputOne = params => {
  const uniq = a => {
    let seen = {};
    return a.filter(function(item) {
      return seen.hasOwnProperty(item.job) ? false : (seen[item.job] = true);
    });
  };

  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl
  } = useAutocomplete({
    className: "customized-hook-input-one",
    multiple: true,
    options: uniq(params.jobList),
    getOptionLabel: option => option.job
  });

  useEffect(() => {
    if (value.length > 1) {
      let fillArray = [];
      value.map(v => fillArray.push(v.job));
      params.setValues({ ...params.values, job_keys: fillArray });
    } else if (value.length > 0) {
      let fillArray = [];
      fillArray.push(value[0].job);
      params.setValues({ ...params.values, job_keys: fillArray });
    } else {
      params.setValues({ ...params.values, job_keys: null });
    }
  }, [value]);

  return (
    <div className="recrutement-input-one">
      <div {...getRootProps()}>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option, index) => (
            <Tag label={option.job} {...getTagProps({ index })} />
          ))}
          <input {...getInputProps()} placeholder="Rechercher par intitulé" />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.job}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
};

export default InputOne;
