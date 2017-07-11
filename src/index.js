// Import theme
import createTheme from "spectacle/lib/themes/default";

const initialTheme = createTheme({
	primary: "#FDF6E3",
	secondary: "#D2A03E",
	tertiary: "#FD853D",
	quarternary: "#657B83",
}, {
	primary: "Menlo"
});

export const theme = {
	...initialTheme,
	screen: {
		...initialTheme.screen,
		components: {
			...initialTheme.screen.components,
			code: {
				...initialTheme.screen.components.code,
				color: initialTheme.screen.colors.quarternary
			},
			text: {
				...initialTheme.screen.components.text,
				color: initialTheme.screen.colors.quarternary
			},
			link: {
				...initialTheme.screen.components.link,
				color: initialTheme.screen.colors.secondary
			}
		}
	}
};
