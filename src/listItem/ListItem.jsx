import React from 'react'
import "./index.css"
import { Link } from "react-router-dom"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

// export const ListItem = () => {
//     return(
//         <div className="item-wrapper">
//             <div className="img-holder">
//                 <img src="https://media-exp1.licdn.com/dms/image/C4E03AQExMd4ko1GwNQ/profile-displayphoto-shrink_800_800/0/1647900004636?e=2147483647&v=beta&t=t-yr4G5TfmjyGV8ocUwOrEjZL4eTwu_VzTkwn7xXFh8"></img>
//             </div>
//             <div className="item-data">
//                 <span id="name">Alexander</span>
//                 <span>Black Mercedes Benz</span>
//                 <span>17:00</span>
//             </div>
//             <div className="price-tag-wrapper">
//                 <div className="price-tag">
//                     <Link to={"/feafefea"} style={{"color": "black"}}>
//                         <b>4.98$</b>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

export const ListItem = ({
    img,
    location,
    title,
    description,
    star,
    price,
    total}) => {
    return(
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <Link to={`/hotel/${title}`}>
                        <h3>{title}</h3>
                    </Link>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}