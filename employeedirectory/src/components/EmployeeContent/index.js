import APIsearch from "../../utils/API";
import { useState, useEffect } from "react";

function EmployeeContent ( {peep, sortArray, arrFilter}) {

    useEffect(() => {
        APIsearch.getPeopleData()
            .then(res => {
                console.log(res.data.results);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="content">
            {sortArray.map(({name}) => {
                
            })}
        </div>

    )

}

export default EmployeeContent; 
