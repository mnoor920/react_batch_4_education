import React from 'react'
import Icon from '../../../assets/computer.png'

const Skills = () => {
    return (
        <div>

            <div className="page_width">
                <div className="skills_container">
                    <div className="item_grid">
                        <div className="img">
                            <img src={Icon} alt="" />
                        </div>
                        <div className="content">
                            <h3>Learn The Latest Skills</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                        </div>
                    </div>
                    <div className="item_grid">
                        <div className="img">
                            <img src={Icon} alt="" />
                        </div>
                        <div className="content">
                            <h3>Learn The Latest Skills</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                        </div>
                    </div>
                    <div className="item_grid">
                        <div className="img">
                            <img src={Icon} alt="" />
                        </div>
                        <div className="content">
                            <h3>Learn The Latest Skills</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills