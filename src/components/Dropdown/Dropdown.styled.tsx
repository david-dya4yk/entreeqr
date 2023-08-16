import styled from "@emotion/styled";
import Link from "next/link";

export const Wrapper = styled.div`
  position: relative;
`;

export const Trigger = styled.button`
  position: relative;
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: max-content 16px;
  align-items: center;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: #000000;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.3s ease, color 0.3s ease;

  &.open {
    color: #667085;
  }
  &:focus {
    outline: transparent;
    text-decoration-color: black;
  }
`;

export const Menu = styled.ul`
  position: absolute;
  right: 0;
  z-index: 1000;
  width: 100%;
  margin-top: 0.5em;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 5px 20px rgba(29, 41, 57, 0.1);
  border-radius: 12px;
  visibility: hidden;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
  padding: 15px;
  min-width: 120px;
  left: 0;
  width: max-content;

  transform: translateY(1rem);

  ${Wrapper}.open & {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }

  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Item = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: #000000;
  transition: background-color 0.3s;
  padding: 10px;
  border-radius: 8px;
  display: block;
  white-space: nowrap;

  &:focus,
  &:hover {
    background-color: #f2f4f7;
    outline: transparent;
  }
`;
