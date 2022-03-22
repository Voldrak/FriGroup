import checkboxs from "./../Libs/Checkbox.json";
import radios from "./../Libs/Radio.json";
import Layout from "../Layout";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "./../../firebase.js";
import { Link } from "react-router-dom";
import style from "./Pages.module.scss";

const FindGroup = () =>{

    const [stateValueRange, setStateValueRange] = useState("50");
    const [groups, setGroups] = useState([]);
    const [interestsCom] = useState(checkboxs);
    const [meetingPlace] = useState(radios);
    
    const handleValueRange = event => setStateValueRange(event.target.value);


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

                <div className={style.wrapper_ListGroup}>
                    <ul className={style.ListUl}>
                        {groups.map((group, index) => (
                            <Link to={`/find_group/${group.id}`}> 
                            <li className={style.ListGroup} key={index}>
                                <div className={style.List_NameDesc}>
                                    <h4 className={style.titleGroup}>{group.Group_Name}</h4>
                                    <p className={style.description}>{group.Description}</p>
                                </div>
                                <div className={style.List_InteMeet}>
                                    <p className={style.interest}>{group.Common_Interests.interests}</p>
                                    <p>{group.Meeting_place}</p>
                                </div>
                                <div>
                                    <p>About {group.Age} years old</p>
                                    <p>{group.Range}Km from {group.Location}</p>
                                </div>
                                <div>
                                    <p>{group.Date}</p>
                                    <p>{group.Time}</p>
                                </div>
                            </li>
                            </Link>
                    ))} 
                    </ul>
                </div>

               <div className={style.SearchOption}>
                    <h3 className={style.Title_AdSearch}>Advanced Search</h3>
                    <div className={style.wrapperSearch}>
                        <label htmlFor="nameGroup">Group Name:
                            <input className={style.inputSearch} type="text" name="nameGroup" placeholder="Search Group"/>
                        </label>
                        <legend>Common interests:</legend>
                        <section id={style.Interests}>
                        {interestsCom.map((boxs) => (

                            <label htmlFor="checkbox">{boxs.name}
                                <input type="checkbox" name="checkbox" value={boxs.value}/>
                            </label>

                        ))}
                        </section>
                        <legend className={style.section_legend}>Meeting place:</legend>
                        <section id={style.Meeting_Place} >
                    {meetingPlace.map((radios) =>(
                    <label htmlFor="radio">{radios.name} 
                        <input type="radio" name="radio" value={radios.value} defaultChecked/>
                    </label>
                    ))}
                </section>
                        <label htmlFor="Age"> Your age:
                            <input id={style.AgeNum} type="number" name="Age" placeholder="18"/>
                        </label>

                        <label htmlFor="range" className={style.section_label}> Range search:
                            <input type="range" min="1" max="150" defaultValue="50" step="1" onChange={handleValueRange} /> {stateValueRange} km
                        </label>
                    </div>
               </div>
              
            </div> 
        </Layout>
    )
}

export default FindGroup;