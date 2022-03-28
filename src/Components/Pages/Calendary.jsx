
// import React, { useState } from "react";
import { Calendar, momentLocalizer  } from "react-big-calendar";
import moment from 'moment'
import { useStateValue } from "./../Libs/StateProvider";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import Layout from "./../Layout/index";
import style from "./Pages.module.scss"


const Calendary = () => {

    const localizer = momentLocalizer(moment)
    const [{ events }] = useStateValue();

    // const [eventsList, setEventsList] = useState([]);

   console.log(events);

    return (
        <Layout>
            <div className="Cale">
                <h1>Calendar</h1>
                {/* <h2>Add New Event</h2> */}
                {/* <div> */}
                    <aside className={style.eventList}>
                        {events?.map((item) =>(
                            <div key={item.id}>
                                <p>{item.title}</p>
                                <p>{item.place}</p>
                                <p>{item.time}</p>
                                <p>{item.date}</p>
                                <p>{item.location}</p>

                            </div>
                        )
                        )}
                    </aside>

                {/* </div> */}
                <Calendar
                    selectable
                    defaultView="week"
                    defaultDate={new Date()}
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    />

            </div>
        </Layout>
    );
}

export default Calendary;