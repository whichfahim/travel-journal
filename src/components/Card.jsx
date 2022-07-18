import React from "react";
import mapPin from "../assets/icons/icon-pin.svg"

export default function Card(props){
    console.log(props)
    return (
        <div>
            <div className="card">
                <img className="card--img" src={props.item.imageUrl}/>
                <div className="card--location">
                    <span className="card--icon-pin"><img  src={mapPin} /></span>
                    <span className="card--location-name"><p>{props.item.location}</p></span>
                    <span className="card--location-link">
                        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </span>
                </div>
                
                <h1 className="card--title">{props.item.title}</h1>
                <div className="card--date">
                    <p>{props.item.startDate} - {props.item.endDate}</p>
                </div>
                <p className="card--description">
                    {props.item.description}
                </p>
            </div>
            
        </div>
        
        
    )
}