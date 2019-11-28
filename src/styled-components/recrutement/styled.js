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
  width: 100%;
margin: 0 auto;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 2px;
  padding: 4px 1px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-left:-1px;
              z-index:2;
                  font-family: 'Playfair Display',
        serif;
    font-weight: 500;

  &:hover {
    border-color: #b4a06e;
  }

  &.focused {
    border-color: #b4a06e;
    box-shadow: 0 0 0 2px rgba(180, 160, 110, 0.2);
  }

  & input {
    width:100%;
    height:40px;
    font-size: 16px;
    line-height: 26px;
    padding: 6px 8px;
    flex-grow: 1;
    border: 0;
    outline: 0;
    font-family: 'Playfair Display',
        serif;
            margin: auto;
            z-index:2;
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
  z-index: 3;

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
  width: calc(80% - 75px);
  margin: 0 auto;
  margin-top: 0px;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 3;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b4a06e;
  }
  @media only screen and (min-width: 668px) {
    width: calc(80% - 45% - 50px + 10px + 1px);
    ${"" /* width of parent - width of input - span/icon + padding + 1px for border */}
  }

  & li {
    padding: 6px 12px;
    display: flex;
    font-family: "Playfair Display", serif;
    text-align: left;
    white-space: wrap;
    overflow: hidden;
    font-weight: 500;
    font-size: 14px;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected="true"] {
    background-color: #b4a06e50;
    font-weight: 500;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus="true"] {
    background-color: #b4a06e50;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;
