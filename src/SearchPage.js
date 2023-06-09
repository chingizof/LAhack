import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import hotelsData from "./hotelsData.js"



function SearchPage() {

    const listNumbers = hotelsData.map((hotel) =>
    <SearchResult 
        img={hotel.img}
        location={hotel.location}
        title={hotel.title}
        description={hotel.description}
        star={hotel.star}
        price={hotel.price}
        total={hotel.total}
    />)


    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            {listNumbers}
            
        </div>
    )
}

export default SearchPage
