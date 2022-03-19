import Layout from "../Layout";
import style from "./Pages.module.scss";
// import styles from "./../Libs/Check.module.scss";

const FindGroup = () =>{
    return(
        <Layout>
            <div className={style.FindGroup_wrapper}>
               <div className={style.UpBar}>
                    <h2 className={style.TitleUpBar}>Find Group</h2>
               </div>
               <div className={style.SearchOption}>
                    
               </div>
            </div> 
        </Layout>
    )
}

export default FindGroup;