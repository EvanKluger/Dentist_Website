import React from 'react';
import './gallery.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';

export default function Gallery() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: 1,
            title: 'Image 1',
            img: "assets/michael.png",
            decription: 'This will be Image 1',
        },
        
        {
            id: 2,
            title: 'Image 2',
            img: "assets/michael.png",
            decription: 'This will be Image 2',
        },
        
        {
            id: 3,
            title: 'Image 3',
            img: "assets/michael.png",
            decription: 'This will be Image 3',
        },
        
        {
            id: 4,
            title: 'Image 4',
            img: "assets/michael.png",
            decription: 'Image 4',
        },
        {
            id: 5,
            title: 'Image 5',
            img: "assets/michael.png",
            decription: 'Image 5',
        },

    ];

    const handleClick = (way)=> {
        way === 'left' ? setCurrentSlide(currentSlide>0 ? currentSlide-1: 4) :
        setCurrentSlide(currentSlide<4 ? currentSlide+1: 0)
    };

    return (
        <div className = 'gallery' id = 'gallery'>
        
            <div className="slider" style = {{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <ArrowBackIosNewIcon className = 'arrow left' onClick = {()=>handleClick('left')}/>
            <ArrowForwardIosIcon className = 'arrow right' onClick = {()=>handleClick('right')}/>        
        </div>
    )
}



