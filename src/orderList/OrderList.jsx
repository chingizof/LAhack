import React from 'react'
import "./index.css" 
import { ListItem } from "../listItem/ListItem"
import MapComponent from "../map/MapComponent"

export const OrderList = () => {
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 0,
        lng: 0,
      } 

    console.log("hola")
    return (

        <div className="order-wrapper">
            <div className="list-wrapper">
                <ListItem />
                <ListItem />
            </div>
            <div className="map-wrapper">
                <div className="map-holder">
                    <MapComponent location={location} zoomLevel={17}/>
                </div>
            </div>

        </div>

        
    )
}