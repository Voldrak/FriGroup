import { Link } from "react-router-dom";
import style from './Header.module.scss';

const Header = () => {
    return(
        <div className={style.Head}>
            <div className={style.Logo}>
            <Link to={'/'}>
                <h1>FriGroup</h1>
            </Link>
            </div>
            <div className={style.Login_settings}>
                <button className={style.Login}>Login</button>
                <button className={style.Settings}>⚙️</button>
            </div>
        </div>
    )
}

export default Header;