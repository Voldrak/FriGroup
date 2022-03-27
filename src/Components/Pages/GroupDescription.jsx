import Layout from "../Layout";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import {db} from "./../../firebase.js";
import style from "./Pages.module.scss";

const GroupDescription = () => {

    let navigate = useNavigate();
    let {id} = useParams();
    const [group, setGroup] = useState([]);

    const handleJoin = () => navigate("/calendary");

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
        const found = currentGroups.find((element) => element.id === id)

        setGroup(found);
        }
        getData()
    },[id]);


    return(
        <Layout>
                <form>
                    <div key={group.id} className={style.wrapper_group}>
                            <h2 className={style.Title_GroupDesc}>{group.Group_Name}</h2>
                        <div className={style.text_GroupDesc}>
                            <p className={style.Description_GroupDesc}>{group.Description}</p>
                            <div className={style.OtherText_GroupDesc}>
                                <p className={style.P_GroupDesc}>We will meet in {group.Meeting_place} at {group.Time} on {group.Date}.</p>
                                <p className={style.P_GroupDesc}>The average age of the group is {group.Age} years old.</p>
                                <p className={style.P_GroupDesc}>Search in the range {group.Range} km from {group.Location}.</p>
                            </div>
                        </div>
                        <input className={style.JoinGroup} type="button" onClick={handleJoin} value="Join" />
                    </div>
                </form>
        </Layout>
    )
}

export default GroupDescription;