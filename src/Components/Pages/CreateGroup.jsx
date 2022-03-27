import { useState} from "react";
import checkboxs from "./../Libs/Checkbox.json";
import radios from "./../Libs/Radio.json";
import Layout from "../Layout";
import {db} from "./../../firebase.js";
import {collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import style from "./Pages.module.scss";
import "./../Libs/Check.module.scss";


const CreateGroup = () => {
    const handleValueRange = event => setStateValueRange(event.target.value);
    const [interestsCom] = useState(checkboxs);
    const [meetingPlace] = useState(radios);
    let navigate = useNavigate();

    const [nameValue, setNameValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [location, setLocation] = useState("");
    const [checkBox, setCheckBox] = useState({interests: []});
    const [radioBox, setRadioBox] = useState([]);
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [ageAbout, setAgeAbout] = useState("")
    const [stateValueRange, setStateValueRange] = useState("50");
    

    const handleCheckBox = (key) => {
        let sel = checkBox.interests;
        let find = sel.indexOf(key);
        if(find > -1) {
            sel.splice(find, 1)
        } else { sel.push(key)
        }
        setCheckBox({
            interests:sel,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newGroup = {
          Group_Name: nameValue,
          Description: descriptionValue,
          Location: location,
          Common_Interests: checkBox,
          Meeting_place: radioBox,
          Date: date,
          Time: time,
          Age: ageAbout,
          Range: stateValueRange,
        };
        console.log(newGroup);
        addDoc(collection(db, "groups"), newGroup);
        setNameValue("");
        navigate('/');
    }


return(
    <Layout>
        <div>
            <form className={style.CreateGroup_Form} onSubmit={handleSubmit}>
                <label htmlFor="nameGroup" className={style.section_label}>Group Name*:
                    <input type="text" name="nameGroup" placeholder="My Group Name" value={nameValue} onChange={(e)=> setNameValue(e.target.value)} required/>
                </label>
                <label htmlFor="description" className={style.section_label}>Description (optional):
                    <input id={style.descriptionText} type="text" name="description" placeholder="Description of the group" value={descriptionValue} onChange={(e)=> setDescriptionValue(e.target.value)} />
                </label>

                <label htmlFor="location" className={style.section_label}>Location*:
                    <input type="text" name="location" placeholder="where?" value={location} onChange={(e)=> setLocation(e.target.value)} required/>
                </label>

                <legend className={style.section_legend}>Common interests (select at least one):</legend>
                    <section id={style.Interests}>
                    {interestsCom.map((boxs) => (

                        <label htmlFor="checkbox">{boxs.name}
                            <input type="checkbox" name="checkbox" value={boxs.value} onChange={() => handleCheckBox(boxs.value)} selected={checkBox.interests.includes(boxs.value)}/>
                        </label>

                    ))}
                </section>

                <legend className={style.section_legend}>Meeting place (select only one)*:</legend>
                <section id={style.Meeting_Place} >
                    {meetingPlace.map((radios) =>(

                    <label htmlFor="radio">{radios.name} 
                        <input type="radio" name="radio" value={radios.value} onChange={(e) => setRadioBox(e.target.value)}/>
                    </label>

                    ))}
                </section>

                <div className={style.section_label}>
                <label htmlFor="Date" className={style.DateLab}>Date*:
                    <input type="date" name="Date" value={date} onChange={(e) => setDate(e.target.value)} required/>
                </label>
                <label htmlFor="Time">Time*:
                    <input type="time" name="Time" value={time} onChange={(e) => setTime(e.target.value)} required/>
                </label>
                </div>
                <label htmlFor="Age" className={style.section_label}> Average age of the group*:
                    <input id={style.AgeNum} type="number" name="Age" placeholder="18" value={ageAbout} onChange={(e) => setAgeAbout(e.target.value)}required/>
                </label>
                <label htmlFor="range" className={style.section_label}> Range search:
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