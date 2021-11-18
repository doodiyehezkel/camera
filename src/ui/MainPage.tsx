import { FC } from "react";

import classes from "./MainPage.module.css"

const MainPage : FC = (props) => {
    return (
        <main className={classes.main_page}>
            {props.children}
        </main>
    )
}

export default MainPage