import { useState } from "react";
import Layout from "../Layout";
import style from "./Pages.module.scss";
import styles from "./../Libs/Check.module.scss"

const CreateGroup = () => {
    const [stateValueRange, setStateValueRange] = useState("50");
    const handleValueRange = event => setStateValueRange(event.target.value);
return(
    <Layout>
        <div>
            <form className={style.CreateGroup_Form}>
                <label for="nameGroup" className={style.section_label}>Group Name*:
                    <input type="text" name="nameGroup" placeholder="My Group Name" required/>
                </label>
                <label for="description" className={style.section_label}>Description (optional):
                    <input type="text" name="description" placeholder="Description of the group" />
                </label>
                    <legend className={style.section_legend}>Common interests (select at least one):</legend>
                <selection id={style.Interests}>

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

                </selection>
                <legend className={style.section_legend}>Meeting place (select only one):</legend>
                <selection id={style.Meeting_Place} >
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
                    
                </selection>
                <div className={style.section_label}>
                <label for="Date" className={style.DateLab}>Date*:
                    <input type="date" name="Date" required/>
                </label>
                <label for="Time">Time*:
                    <input type="time" name="Time" required/>
                </label>
                </div>
                <label for="range" className={style.section_label}> Range search:
                    <input type="range" min="1" max="150" defaultValue="50" step="1" onChange={handleValueRange} /> {stateValueRange} km
                </label>
                <div className={style.button}>
                    <input type="reset" value="reset"/>
                    <input type="submit" value="Send"/>
                </div>
            </form>
        </div>
    </Layout>
)
}

export default CreateGroup;