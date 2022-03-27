import Layout from './../Layout';
import style from './Pages.module.scss';
import { Link } from "react-router-dom";
import Calendary from './Calendary';


const Home = () => {
    return(
            <Layout>
            <main className={style.bodyHome}>

                <Link to={'/create_group'}> 
                    <div id={style.createGroup} className={style.select_Home}>
                        <h2>Create Group</h2>
                    </div>
                </Link>

                <Link to={'/find_group'}> 
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