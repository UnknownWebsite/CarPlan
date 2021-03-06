import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    name: "light"
};

export const darkTheme = {
    name : "dark"
};

export const GlobalStyles = createGlobalStyle`:root{
    body{
        --main-bg-color : var(--${(props) =>props.theme.name}-bg-color);
        --main-text-color : var(--${(props) =>props.theme.name}-text-color);
        --main-menu-color : var(--${(props) =>props.theme.name}-menu-color);
        --main-error-color : var(--${(props) =>props.theme.name}-error-color);
    }
}`;