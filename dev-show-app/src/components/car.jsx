import React from "react";
import '../assets/CSS/car.css'
const slideWidth = 30;

const _items = [
    {
        player: {
            title: 'Ai Chess-bot',
            desc: 'Worked with GPT api model diabolo engine and api calls to create an interface chess game against the AI. I lost.',
            image: 'https://i.postimg.cc/D0brCR29/chess-8889822-1.png',
            link: 'https://github.com/Mackay-Fisher/Ai_chessbot',
        },
    },
    {
        player: {
            title: "Synergetic Meds",
            desc: "Frontend developed website focused on educating others of the risk of improper medicine use as well as prescription match risk protection",
            image: 'https://i.postimg.cc/FzmSZzBL/Screenshot-2023-07-17-at-7-41-26-PM.png',
            link: 'https://github.com/Mackay-Fisher/Synergetic-Meds-Hackathon-2023',
        },
    },
    {
        player: {
            title: 'Api image generator',
            desc: 'Called images from a random image generator and formatted them all to fit the same dimensions with text and spacing',
            image: 'https://i.postimg.cc/6qR5qxL5/3696685.png',
            link: 'https://github.com/Mackay-Fisher/React-Portfolio/tree/main/React%20Portfolio/api_image_generator',
        },
    },
    {
        player: {
            title: 'Yahtzee',
            desc: 'This is a showcase of my use effect and redux skill to keep multiple states across different pages and conditional rendering',
            image: 'https://i.postimg.cc/zDbWCm27/240px-2-Dice-Icon-svg.png',
            link: 'https://github.com/Mackay-Fisher/React-Portfolio/tree/main/React%20Portfolio/Dice-Practice',
        },
    },
    
    
    {
        player: {
            title: 'Fitness App Form Tracking',
            desc: 'In Progress Full-stack, React Native app that combines OpenCV and machine learning algorithms to track body position and alignment for proper form during exercise and generate workouts for users',
            image: 'https://i.postimg.cc/YqF99MDc/fd0a7270379977-5ba1a1f4d125a.gif',
        },
    },
    
    {
        player: {
            title: 'Ai Mario',
            desc: 'Reinforcement learning project using vector stacking and stable baseline to train a Mario character to beat initial game levels with repeated training, long-term, and short-term storage.',
            image: 'https://i.postimg.cc/rsN4pKKZ/mario.gif',
            link: 'https://github.com/Mackay-Fisher/Ai-Mario'
        },
    },
    {
        player: {
            title: 'Restful Restaurant',
            desc: 'Code Academy portfolio project to learn and practice with Rest API calls and back-end frameworks in Express.',
            image: 'https://i.postimg.cc/C5Xz2Kv7/api-icon-style-free-vector.jpg',
            link:'https://github.com/Mackay-Fisher/backend-Practice'
        },
    },
    {
        player: {
            title: 'Predictive Absence',
            desc: 'Worked with CSV files and records related to patient absences to help predict patient cancellations and appointment vacancy rates to optimize care metrics',
            image: 'https://i.postimg.cc/mrCNNvgK/2103601.png',
            link: 'https://github.com/Mackay-Fisher/Medeical-Prediction'
        },
    },
    {
        player: {
            title: 'AI Research Project',
            desc: 'Current internship project focused on NLP and generative text for self-writing SMS and email for a variety of consumer classifications',
            image: 'https://i.postimg.cc/BQpz21V2/ai-research-icon-in-illustration-vector.jpg',
        },
    },
    {
        player: {
            title: 'Digital Business Card',
            desc: 'Dynamically-sized business card written in vanilla CSS and React to showcase dynamic rendering',
            image: 'https://i.postimg.cc/QtzPKL4w/Screenshot-2023-07-17-at-7-53-00-PM.png',
            link: 'https://github.com/Mackay-Fisher/React-Portfolio/tree/main/React%20Portfolio/Digital-Card',
        },
    },
    {
        player: {
            title: 'Meme Generator',
            desc: 'Worked with AI generative images and form-based inputs to create memes at the click of the button',
            image: 'https://i.postimg.cc/CKrY7QrH/automation-8103791.png',
            link: 'https://github.com/Mackay-Fisher/React-Portfolio/tree/main/React%20Portfolio/meme-generator',
        },
    },
    {
        player: {
            title: 'Travel Journal',
            desc: 'Showcase generative component to create API-based storage cards holding images links and dynamic sizing',
            image: 'https://i.postimg.cc/G2tC8nrn/3359818-200.png',
            link: 'https://github.com/Mackay-Fisher/React-Portfolio/tree/main/React%20Portfolio/Travel-Journal',
        },
    },
    {
        player: {
            title: 'Notes App',
            desc: 'Created a local browser storage app that keeps track of apps written following interface modeled after apple notes app',
            image: 'https://i.postimg.cc/7LtGzXgj/images.png',
            link: 'https://github.com/Mackay-Fisher/React-Portfolio/tree/main/React%20Portfolio/Notes-app',
        },
    },
    {
        player: {
            title: 'Pygame Platformer',
            desc: 'Mario style side scrolling platformer written in pygame and styled in tiled',
            image: 'https://i.postimg.cc/fRxN4b2L/python-3344372.png',
            link: 'https://github.com/Mackay-Fisher/Python-Platformer',
        },
    },
    {
        player: {
            title: 'C Data Structure Portfolio',
            desc: 'Library of first hand written data structures and algorithm that cover basic strings to graph theory',
            image: 'https://i.postimg.cc/yYyPw4hK/datastruct.jpg',
            link: 'https://github.com/Mackay-Fisher/C-Data-Structures',
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 1};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <a target="_blank" rel="noreferrer" href={item.player.link}>
            <div className="carousel__slide-item-img-link">
                <img src={item.player.image} alt={item.player.title} className='carimage'/>                      
            </div>
            </a> 
            <div className="carousel-slide-item__body">
                <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="widthhold">
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
                <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Carousel