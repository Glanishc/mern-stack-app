import React, { useState } from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = ["banner.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg", "banner5.jpg", "banner6.jpg", ]; 

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length); 
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length); 
    };

    return (
        <>
            <div className='About'>
                <div className="home-img">
                    <h1 className="typing-text">It's a <span></span></h1>
                    <div className="image-container">
                        <img src={images[currentImage]} alt="" className="overlapping-img" />
                    </div>
                    <button className="prev-button" onClick={handlePrev}>❮</button>
                    <button className="next-button" onClick={handleNext}>❯</button>
                </div>
                <div className="home-content">
                    <h1>Wekfest Japan</h1>
                    <p className='scrolling-paragraph'>
                    Welcome to <span class="highlight1">Wekfest</span>, a dazzling showcase of <span class="highlight2">automotive artistry</span> that ignites the passions of car enthusiasts <span class="highlight3">worldwide</span>! Born in the vibrant heart of <span class="highlight4">California</span> in 2010, Wekfest has evolved into a global phenomenon, with <span class="highlight5">Japan</span> as a standout location where the country’s <span class="highlight1">rich automotive culture</span> comes alive. Imagine a place where meticulous craftsmanship meets <span class="highlight2">creative expression</span>—this is Wekfest’s mission: to provide a prestigious platform for car lovers to flaunt their stunning builds. Unlike typical car shows that may simply parade vehicles, Wekfest elevates the experience by focusing on <span class="highlight3">quality over quantity</span>, ensuring only the most exceptional cars make the cut through a rigorous selection process. As the event unfolded, it quickly became clear that Wekfest was more than just a showcase; it was a vibrant community, a space for enthusiasts to connect, share ideas, and revel in their shared passion for <span class="highlight4">automotive excellence</span>.
                    Launched in Japan in <span class="highlight5">2014</span>, Wekfest Japan quickly established itself as a premier event on the automotive calendar, attracting thousands of visitors and participants each year. From classic <span class="highlight1">JDM</span> (Japanese Domestic Market) beauties to modern performance powerhouses, the diverse lineup showcases the best of <span class="highlight2">automotive innovation</span>. Held annually in the summer, Wekfest Japan offers a thrilling competition where participants vie for coveted awards in various categories, including <span class="highlight3">Best in Show</span> and <span class="highlight4">Best VIP</span>, celebrating creativity and craftsmanship. The event is a sensory feast, featuring bustling vendor booths packed with aftermarket parts, stylish car accessories, and exclusive merchandise that enhances the experience for all attendees. Over the years, Wekfest has fostered partnerships with local car clubs and brands, solidifying its reputation as a cornerstone of the automotive community. It’s not just an exhibition; Wekfest Japan is a spectacular celebration of <span class="highlight5">creativity</span>, <span class="highlight1">innovation</span>, and camaraderie among car enthusiasts. With an atmosphere that buzzes with energy and excitement, this event is a must-visit for anyone who appreciates the artistry of automotive culture.
                    </p>
                    <Link to="/register" className="btn">Join Us!</Link>
                    <div className="social-icons">
                        <a href="#"><i className="fa-brands fa-linkedin">IG</i></a>
                        <a href="#"><i className="fa-brands fa-github">YT</i></a>
                        <a href="#"><i className="fa-brands fa-x-twitter">X</i></a>
                        <a href="#"><i className="fa-brands fa-instagram">FB</i></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
