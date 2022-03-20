import { useState, useEffect } from "react";
import Layout from "../Layout";
import {db} from "./../../firebase.js";
import {collection, addDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import style from "./Pages.module.scss";
import styles from "./../Libs/Check.module.scss";


const CreateGroup = () => {
    const [stateValueRange, setStateValueRange] = useState("50");
    const handleValueRange = event => setStateValueRange(event.target.value);

    const [nameValue, setNameValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");

    

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const newGroup = {
          Group_Name: nameValue,
          Description: descriptionValue,
        };
        console.log(newGroup);
        addDoc(collection(db, "groups"), newGroup);
        setNameValue("");
      }


return(
    <Layout>
        <div>
            <form className={style.CreateGroup_Form} onSubmit={handleSubmit}>
                <label for="nameGroup" className={style.section_label}>Group Name*:
                    <input type="text" name="nameGroup" placeholder="My Group Name" value={nameValue} onChange={(e)=> setNameValue(e.target.value)} required/>
                </label>
                <label for="description" className={style.section_label}>Description (optional):
                    <input id={style.descriptionText} type="text" name="description" placeholder="Description of the group" value={descriptionValue} onChange={(e)=> setDescriptionValue(e.target.value)} />
                </label>
                    <legend className={style.section_legend}>Common interests (select at least one):</legend>
                <section id={style.Interests}>

                    <label for="checkbox" className={styles.Label_CheckBox}>Anime
                        <input type="checkbox" name="checkbox" value="Anime"/>
                    </label>

                    <label for="checkbox" className={styles.Label_CheckBox}>Manga
                        <input type="checkbox" name="checkbox" value="Manga"/>
                    </label>

                    <label for="checkbox" className={styles.Label_CheckBox}>Gaming
                        <input type="checkbox" name="checkbox" value="Gaming"/>
                    </label>

                    <label for="checkbox" className={styles.Label_CheckBox}>Moto
                        <input type="checkbox" name="checkbox" value="Moto"/>
                    </label>

                    <label for="checkbox" className={styles.Label_CheckBox}>Auto
                        <input type="checkbox" name="checkbox" value="Auto"/>
                    </label>

                    <label for="checkbox" className={styles.Label_CheckBox}>Film/Telefilm
                        <input type="checkbox" name="checkbox" value="Film/Telefilm"/>
                    </label>

                    <label for="checkbox" className={styles.Label_CheckBox}>Libri
                        <input type="checkbox" name="checkbox" value="Libri"/>
                    </label>

                    <label for="checkbox" className={styles.Label_CheckBox}>Drink
                        <input type="checkbox" name="checkbox" value="Drinks"/>
                    </label>

                    <label for="checkbox" className={styles.Label_CheckBox}>Food
                        <input type="checkbox" name="checkbox" value="Food"/>
                    </label>

                    <label for="checkbox" className={styles.Label_CheckBox}>Dance
                        <input type="checkbox" name="checkbox" value="Dance"/>
                    </label>

                </section>
                <legend className={style.section_legend}>Meeting place (select only one):</legend>
                <section id={style.Meeting_Place} >
                    <label for="radio">Bar 
                        <input type="radio" name="radio" value="Bar" defaultChecked/>
                    </label>
                    <label for="radio">Pub
                        <input type="radio" name="radio" value="Pub"/>
                    </label>
                    <label for="radio">Resturant
                        <input type="radio" name="radio" value="Resturant"/>
                    </label>
                    <label for="radio">Discotheque
                        <input type="radio" name="radio" value="Discotheque"/>
                    </label>
                    <label for="radio">Game room 
                        <input type="radio" name="radio" value="Game_room"/>
                    </label>
                    
                </section>
                <div className={style.section_label}>
                <label for="Date" className={style.DateLab}>Date*:
                    <input type="date" name="Date" required/>
                </label>
                <label for="Time">Time*:
                    <input type="time" name="Time" required/>
                </label>
                </div>
                <label for="Age" className={style.section_label}> Average age of the group*:
                    <input id={style.AgeNum} type="number" name="Age" defaultValue="18" required/>
                </label>
                <label for="range" className={style.section_label}> Range search:
                    <input type="range" min="1" max="150" defaultValue="50" step="1" onChange={handleValueRange} /> {stateValueRange} km
                </label>
                <div className={style.button}>
                    <input type="reset" value="reset"/>
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    </Layout>
)
}

export default CreateGroup;