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
                <ListItem 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£117 total"
                />
                <ListItem 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£117 total"
                />
            </div>
            <div className="map-wrapper">
                <div className="map-holder">
                    <MapComponent location={location} zoomLevel={17}/>
                </div>
            </div>

        </div>

        
    )
}