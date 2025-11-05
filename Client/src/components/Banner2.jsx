import './Banner.css'

const Banner = () => {
  return (
    <>
      
        <video className="back-video" loop muted autoPlay>
          <source src="https://mernvideos.blob.core.windows.net/mern-videos/BG2.mp4" type="video/mp4"/>
        </video>
        <div className='banner'/>
    </>
  );
}

export default Banner;
