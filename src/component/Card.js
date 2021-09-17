import React, { useState, useEffect } from 'react';
function Card(props){

    return(
        <div className = "cardMain">
              {props.image}
            <div className = "cardInfo">
                <p> Name: {props.name}</p>
                <p> Age: {props.age}</p>
                <p> Job Title: {job}</p>
            </div>

        </div>
    );
}
export default Card;