import Layout from "../Layout";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "./../../firebase.js";
import style from "./Pages.module.scss";

const FindGroup = () =>{

    const [groups, setGroups] = useState([]);


    useEffect( () => {
            const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "groups"));
            const currentGroups = querySnapshot.docs.map(doc => {
                const obj = {
                id: doc.id,
                ...doc.data(),
                };
                return obj;
            });
            console.log(currentGroups);
            setGroups(currentGroups);
            }
            getData()
        },[]);



    return(
        <Layout>
            <div className={style.FindGroup_wrapper}>
               <div className={style.UpBar}>
                    <h2 className={style.TitleUpBar}>Find Group</h2>
               </div>
               <div>
               <ul>
       {groups.map((group, index) => (
         <li key={index}>
         <h4>{group.Group_Name}</h4>
         <p>{group.Description}</p>

         </li>
       ))} 
      </ul>
               </div>
               <div className={style.SearchOption}>
                    <h3 className={style.Title_AdSearch}>Advanced Search</h3>
                    <div className={style.wrapperSearch}>
                        <label for="nameGroup">Group Name:
                            <input type="text" name="nameGroup" placeholder="Search Group"/>
                        </label>
                        <legend>Common interests:</legend>
                        <selection id={style.Interests}>

                    <label for="checkbox"><p>Anime</p>
                        <input type="checkbox" name="checkbox" value="Anime"/>
                    </label>

                    <label for="checkbox"><p>Manga</p>
                        <input type="checkbox" name="checkbox" value="Manga"/>
                    </label>

                    <label for="checkbox"><p>Gaming</p>
                        <input type="checkbox" name="checkbox" value="Gaming"/>
                    </label>

                    <label for="checkbox"><p>Moto</p>
                        <input type="checkbox" name="checkbox" value="Moto"/>
                    </label>

                    <label for="checkbox"><p>Auto</p>
                        <input type="checkbox" name="checkbox" value="Auto"/>
                    </label>

                    <label for="checkbox"><p>Film/Telefilm</p>
                        <input type="checkbox" name="checkbox" value="Film/Telefilm"/>
                    </label>

                    <label for="checkbox"><p>Libri</p>
                        <input type="checkbox" name="checkbox" value="Libri"/>
                    </label>

                    <label for="checkbox"><p>Drink</p>
                        <input type="checkbox" name="checkbox" value="Drinks"/>
                    </label>

                    <label for="checkbox"><p>Food</p>
                        <input type="checkbox" name="checkbox" value="Food"/>
                    </label>

                    <label for="checkbox"><p>Dance</p>
                        <input type="checkbox" name="checkbox" value="Dance"/>
                    </label>

                        </selection>
                        <legend className={style.section_legend}>Meeting place:</legend>
                        <selection id={style.Meeting_Place}>
                            <label for="radio"><p>Bar</p>
                                <input type="radio" name="radio" value="Bar" />
                            </label>
                            <label for="radio"><p>Pub</p>
                                <input type="radio" name="radio" value="Pub"/>
                            </label>
                            <label for="radio"><p>Resturant</p>
                                <input type="radio" name="radio" value="Resturant"/>
                            </label>
                            <label for="radio"><p>Discotheque</p>
                                <input type="radio" name="radio" value="Discotheque"/>
                            </label>
                            <label for="radio"><p>Game room</p>
                                <input type="radio" name="radio" value="Game_room"/>
                            </label>
                            
                        </selection>
                        <label for="Age"> Your age:
                            <input id={style.AgeNum} type="number" name="Age"/>
                        </label>
                    </div>
               </div>
              
            </div> 
        </Layout>
    )
}

export default FindGroup;