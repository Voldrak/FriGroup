import Layout from './../Layout';
import { Link } from "react-router-dom";
import { useStateValue } from "./../Libs/StateProvider";
import style from './Pages.module.scss';


const Home = () => {

    const [{ user }] = useStateValue();

    return(
            <Layout>
            <main className={style.bodyHome}>

                <Link to={'/create_group'}> 
                    <div id={style.createGroup} className={style.select_Home}>
                        <h2>Create Group</h2>
                    </div>
                </Link>

                <Link to={user ? '/find_group'  : "/login"}> 
                    <div id={style.findGroup} className={style.select_Home}>
                        <h2>Find Group</h2>
                    </div>
                </Link>

                <Link to={'/calendary'}>
                    <div id={style.calendary} className={style.select_Home}>
                        <h2>Calendary</h2>
                    </div>
                </Link>

                <Link to={'/istruction'}>
                    <div id={style.istructions} className={style.select_Home}>
                        <h2>Istructions</h2>
                    </div>
                </Link>

            </main>
            </Layout>
    )
}

export default Home