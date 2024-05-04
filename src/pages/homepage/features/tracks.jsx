import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { GoDeviceCameraVideo } from "react-icons/go";
import { LuDownload } from "react-icons/lu";
import CardImg from '../../../assets/card_img.jpg'

const Tracks = () => {
    return (
        <div className='outer_track' >
            <div className="page_width">
                <div className="track_div">
                    <div className="top_content">
                        <h3>Our Tracks</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                    <div className="track_cards">
                        <div className="">
                            <div className="cards">
                                <div className="img">
                                    <img src={CardImg} alt="" />
                                </div>
                                <div className="rating">
                                    <small>UI/UX Design</small>
                                    <div className="stars">
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaRegStar className='full_icon' />
                                    </div>
                                </div>
                                <div className="main_heading">
                                    <h2>UI/UX Design for Beginners</h2>
                                    <h3>$98</h3>
                                </div>
                                <hr />
                                <div className="icons">
                                    <div className="icon_item">
                                        <span> <CiClock2 color='#000000' size={18} /> 22hr 30min </span>
                                    </div>
                                    <div className="icon_item">
                                        <span> <CiClock2 color='#000000' size={18} /> 22hr 30min </span>
                                    </div>
                                    <div className="icon_item">
                                        <span> <CiClock2 color='#000000' size={18} /> 22hr 30min </span>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <button>Join Course</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracks