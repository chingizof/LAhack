import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <h1>Welcome to ChargeHotels</h1>
                <h5>
                    Get accesss to the locations of hotels that include charging station, and book them.
                </h5>
                <Button onClick={() => history.push('/map')} variant='outlined'>Get Started</Button>
            </div>
        </div>
    )
}

export default Banner
