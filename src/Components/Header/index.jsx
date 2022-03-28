import { Link } from "react-router-dom";
import { useStateValue } from "./../Libs/StateProvider";
import { getAuth } from "firebase/auth";
import style from './Header.module.scss';

const Header = () => {

    const auth = getAuth();
    const [{ user }] = useStateValue();

    const login = () => {
        if (user) {
          auth.signOut();
        }
      };

    return(
        <div className={style.Head}>
            <div className={style.Login_settings}>
            <span>
                  Hi,{" "}
                  {user
                    ? user?.email.substring(0, user?.email.indexOf("@"))
                    : "Guest"}
                </span>{" "}
            </div>
            <div className={style.Logo}>
            <Link to={'/'}>
                <img src="https://firebasestorage.googleapis.com/v0/b/frigroup-social.appspot.com/o/FriGroup_Logo.png?alt=media&token=952da99e-e915-441a-b83d-9ab7bd2f1400" alt="FriGroup" loading="lazy" />
            </Link>
            </div>
            <div className={style.Login_settings}>
                <Link to={!user && '/login'}>
                    <div onClick={login} className={style.Login}>{user ? "LogOut" : "LogIn"}</div>
                </Link>
                {/* <div className={style.Settings}>⚙️</div> */}
            </div>
        </div>
    )
}

export default Header;