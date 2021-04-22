import APIsearch from "../../utils/API";
import { useState, useEffect } from "react";

function EmployeeContent({ peep, sortArray, arrFilter }) {

    useEffect(() => {
        APIsearch.getPeopleData()
            .then(res => {
                console.log(res.data.results);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="content">
        <p>Load Employee content here</p>
        {/* <APIsearch getPeopleData/> */}
            {/* {sortArray.map(({ name }) => {
                return (
                    <div key={name} >
                    </div>
                )
            }
            )} */}
        </div>
    )
}
export default EmployeeContent;
