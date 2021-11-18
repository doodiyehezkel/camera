import { FC } from "react";
import classes from "./MainNavigation.module.css"
import { Link } from "react-router-dom";
const MainNavigateion: FC = () => {

    return (
        <header className={classes.main_navigation}>
            <ul>
                <li><Link to="/" > דף הבית </Link></li>
                <li><Link to="/articles" > מאמרים </Link></li>
                <li><Link to="/photos" > תמונות </Link></li>
                <li><Link to="/about" > אודותינו </Link></li>
            </ul>
        </header>
    )

}


export default MainNavigateion;