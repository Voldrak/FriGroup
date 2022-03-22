import Layout from "../Layout";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "./../../firebase.js";
import style from "./Pages.module.scss";

const GroupDescription = () => {

    let {id} = useParams();
    const [group, setGroup] = useState([]);

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
        const found = currentGroups.find(element => element.id === id)

        setGroup(found);
        }
        getData()
    },[id]);

    return(
        <Layout>
                <form>
                    <div key={group.id} className={style.wrapper_group}>
                        <h2 className={style.Desc_Title}>{group.Group_Name}</h2>
                        <p>{group.Description}</p>
                        {/* <p>{group.Common_Interests.interests}</p> */}
                        <p>{group.Meeting_place}</p>
                        <p>About {group.Age} years old</p>
                        <p>Search in the range {group.Range} km from {group.Location}</p>
                        <p>{group.Date} at {group.Time}</p>
                        <input className={style.JoinGroup} type="submit" value="Join" />
                    </div>
                </form>
        </Layout>
    )
}

export default GroupDescription;