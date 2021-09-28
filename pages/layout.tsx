import css from 'styled-jsx/css'


export interface Props {
    /**The child components */
    children: React.ReactNode;

    /**Weather light or dark mod should be enabled */
    darkMode?: boolean;
}

function Layout(props: Props) {

    const style = props.darkMode ? darkTheme : lightTheme;

    return (
        <div className="page-layout">
            {props.children}
            <style jsx global>
                {style}
            </style>
        </div>
    )

}

const lightTheme = css.global`:root{
    --main-bg-color: var(--light-bg-color);
    --main-menu-color: var(--light-menu-color);
    --main-text-color: var(--light-text-color);
    --main-error-color: var(--light-error-color);
    --main-highlight-color: var(--light-highlight-color);
    --main-disabled-color: var(--light-disabled-color);
    --main-disabled-2-color: var(--light-disabled-2-color);
}
`;

const darkTheme = css.global`
    :root{
    --main-bg-color: var(--dark-bg-color);
    --main-menu-color: var(--dark-menu-color);
    --main-text-color: var(--dark-text-color);
    --main-error-color: var(--dark-error-color);
    --main-highlight-color: var(--dark-highlight-color);
    --main-disabled-color: var(--light-disabled-color);
    --main-disabled-2-color: var(--dark-disabled-2-color);
    }
`;


export default Layout;