/*
 * Copyright (c) 2020. Adam Arthur Faizal. All Rights Reserved
 */

import React, {useState} from 'react';
import {Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from "reactstrap";

const CarouselLab = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const items = [
        {
            src: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/1000/400`,
            altText: 'Slide 1',
            caption: 'Slide 1'
        },
        {
            src: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/1000/400`,
            altText: 'Slide 2',
            caption: 'Slide 2'
        },
        {
            src: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/1000/400`,
            altText: 'Slide 3',
            caption: 'Slide 3'
        }
    ];

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} className="img-fluid"/>
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <section id="CarouselLab" className="p-3 d-flex text-center flex-row align-items-center justify-content-center">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </section>
    );
}

export default CarouselLab;
