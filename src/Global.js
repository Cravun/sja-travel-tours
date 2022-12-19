import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

`;

export const PrimaryFont = `
font-family: "Inter";
font-style: normal;
`;
export const PrimaryColor = `
color: rgb(0, 0, 0);
`;

export default GlobalStyles;
