import React from "react";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

export const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

export const InputWrapper = styled("div")`
  width: 80%;
margin: 0 auto;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    z-index: 10;
  }

  & input {
    width:100%;
    font-size: 14px;
    line-height: 26px;
    padding: 6px 8px;
    flex-grow: 1;
    border: 0;
    outline: 0;
    ${"" /* &:focus{
      z-index:2;
    } */}
  }
${
  "" /* 
  &:after {
    content: "${props => props.placeholder}";
    position: absolute;
    left: 8px;
    top: 6px;
    color: #bbb;
    z-index: 1; */
}
  }
`;

export const Tag = styled(({ label, onDelete, ...props }) => (
  <div {...props}>
    <span>{label}</span>
    <CloseIcon onClick={onDelete} />
  </div>
))`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;
  z-index: 10;

  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 24px;
    cursor: pointer;
    padding: 4px;
  }
`;

export const Listbox = styled("ul")`
  width: 80%;
  margin: 0 auto;
  margin-top: 2px;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 3;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected="true"] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus="true"] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;
