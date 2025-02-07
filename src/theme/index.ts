import * as styledComponents from 'styled-components';

const { default: styled, css, keyframes, ThemeProvider } = styledComponents;

export const appColors = ['#1a1a1a', '#2c5282', '#F6F7F9'];

export const theme = {
	bckgColor: appColors[0],
	textHighLightColor: appColors[1],
	bckgGreyColor: appColors[2],
	radius: '5px',
	breakpoints: {
		tablet: '768px',
	},
};

export { css, keyframes, ThemeProvider };
export default styled;
