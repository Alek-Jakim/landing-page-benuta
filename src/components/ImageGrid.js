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
        <div className="images-grid" id="grid-area">
            <div className="grid-wrapper">
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
