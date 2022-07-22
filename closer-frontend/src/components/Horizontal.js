

import HorizontalScroll from 'react-scroll-horizontal';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';

const HorizontalCategory = () => {
    const [categories, setCategories] = useState([]);
    function getCategories() {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/getAllCategories",
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