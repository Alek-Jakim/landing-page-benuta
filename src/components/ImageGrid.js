import React, { useState, useEffect } from 'react'

const ImageGrid = () => {

    /* Fetching the images from the json file in the public directiory*/

    const [data, setData] = useState([]);

    const fetchImageData = async () => {
        let response = await fetch("benutaImages.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        );

        let data = await response.json();

        setData(data);
    }

    useEffect(() => {
        fetchImageData();
    }, [])


    return (
        <div className="images-grid">
            <div className="grid-wrapper">

                {/*<div className="image-container">
                            <a href="#" className="image-link"><img src={item.image} alt={item.name} key={index} className="item-image" />
                                <p className="image-name">{item.name}</p>
                            </a>
                        </div>*/}
                {
                    data && data.length && data.map((item, index) => (
                        <div className="image-container" key={index}>
                            <a href={`#${item.name.toLowerCase()}`}>
                                <img src={item.image} alt={item.name} className="image-item" />
                                <p className="image-text">{item.name}</p>
                            </a>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default ImageGrid
