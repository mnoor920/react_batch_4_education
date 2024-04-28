import React from 'react'
import BannerImg from '../../../assets/banner_img.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="page_width">
                <div className="banner_inner">
                    <div className="content">
                        <h2>
                            The <span>Smart</span> <br />
                            Choice For <span>Future</span>
                        </h2>
                        <p>
                            Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...
                        </p>
                        <div className="search_box">
                            <input type="text" placeholder='Search for a location...' className='search_box_input' />
                            <button>Continue</button>
                        </div>
                    </div>
                    <div className="img">
                        <img src={BannerImg} width="100%" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner