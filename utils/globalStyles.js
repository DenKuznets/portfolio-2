import { createGlobalStyle } from "styled-components";

import { colors } from "./js/colors";
import { screen } from "./js/screen";
import { fonts } from "./js/fonts";

const GlobalStyle = createGlobalStyle`

  /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}


/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

${"" /* ================================END OF RESETS */}



h1,h2,h3,h4,h5,h6 {
  font-family: ${fonts.raleweay};
}

h1 {
    font-size: 4.5rem;
    line-height: 1.1;
    @media (max-width: ${screen.mobileL}) {
        font-size: 3rem;
    }
}

h2{
  font-size: 2.5em;
}

h3{
  font-size: 1.7rem;
}

p {
  font-size: 1rem;
  color: ${({ theme }) => theme.global.pTextColor}; 
    
    
    @media (max-width: ${screen.mobileL}) {
        font-size: 0.8rem;
    }
}

a{
  color: ${({ theme }) => theme.global.aTextColor};
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 1;
    text-decoration: underline;
  color: ${({ theme }) => theme.global.aHoverTextColor};
    
  }
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

section {
    padding: 0 1em;
  	width: 100%;
}

img, .small-icon, svg {
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
}

.social-icon-container{
	padding: 14px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	transition: all 0.3s ease;
	color: ${({ theme }) => theme.global.socialIconContainerColor};
	background-color: ${({ theme }) => theme.global.socialIconContainerBG};
	&:hover{
		transform: scale(1.2);
	}
}
`;

export default GlobalStyle;
