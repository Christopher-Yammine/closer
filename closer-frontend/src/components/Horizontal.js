

import HorizontalScroll from 'react-scroll-horizontal';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';

const HorizontalCategory = () => {
    const { REACT_APP_BASE_URL } = process.env;
    const [categories, setCategories] = useState([]);
    function getCategories() {
        axios({
            method: "get",
            url: REACT_APP_BASE_URL + "getAllCategories",
        }).then(function (response) {
            setCategories(response.data.data.category);

        })
    }
    useEffect(() => { getCategories() }, [])
    return (
        <div className="events-container">
            <HorizontalScroll>
                {categories.map(category =>
                (<CategoryCard data={category.cover_photo}
                    title={category.name} key={category.id} id={category.id} />))}
            </HorizontalScroll>
        </div>
    )

}

export default HorizontalCategory