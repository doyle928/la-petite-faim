import React, { useEffect } from "react";
import "../RecrutementJobList.css";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import CheckIcon from "@material-ui/icons/Check";

import {
  Label,
  InputWrapper,
  Tag,
  Listbox
} from "../../../../../styled-components/recrutement/styled";

const InputTwo = params => {
  const uniq = a => {
    let seen = {};
    return a.filter(function(item) {
      return seen.hasOwnProperty(item.department)
        ? false
        : (seen[item.department] = true);
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
    className: "customized-hook-input-two",
    multiple: true,
    options: uniq(params.jobList),
    getOptionLabel: option => option.department
  });

  useEffect(() => {
    if (value.length > 1) {
      let fillArray = [];
      value.map(v => fillArray.push(v.department));
      params.setValues({ ...params.values, department_keys: fillArray });
    } else if (value.length > 0) {
      let fillArray = [];
      fillArray.push(value[0].department);
      params.setValues({
        ...params.values,
        department_keys: fillArray
      });
    } else {
      params.setValues({
        ...params.values,
        department_keys: null
      });
    }
  }, [value]);

  return (
    <div className="recrutement-input-two">
      <div {...getRootProps()}>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option, index) => (
            <Tag label={option.department} {...getTagProps({ index })} />
          ))}

          <input {...getInputProps()} placeholder="Rechercher par ville" />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.department}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
};

export default InputTwo;
