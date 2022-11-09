import React, {useEffect, useState} from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import FacebookIcon from "../../public/icons/facebook.svg"
import InstagramIcon from "../../public/icons/instagram.svg"
import LinkedinIcon from "../../public/icons/linkedin.svg"
import $ from "jquery"
import {Swipe} from "mirsahib-react-swipe-component"
import PrimaryBtn from "../buttons/primary-btn"

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
        if(document.querySelector(".VaroBoy__contact--drawer").classList.contains("open")){
            document.body.style.overflowY = "visible";
        } else {
            document.body.style.overflowY = "hidden";
        }
    }

    const closeContactWindow = () => {
        toggleDrawer();
    }

    useEffect(()=> {
        $(".VaroBoy__subscribe-field input").on("focus", function() {
            $(this).siblings('label').addClass('has-value');
        }).on("blur", function() {
            const text_val = $(this).val();
            if(text_val === "") {
                $(this).siblings('label').removeClass('has-value');
            }
        });
    })

    return (
        <>
            <div className="VaroBoy__navigation-nav--menu-item">
                <button onClick={toggleDrawer} className="VaroBoy__navigation-nav--link VaroBoy__nav-contact">
                    <img src="/icons/contact.svg" className="nav-links" alt="contact-icon" height={27} />
                    <p className="VaroBoy__navigation-nav--text-mobile">
                        Contact
                    </p>
                </button>
                <span className="VaroBoy__tooltip">Contact</span>
                <Swipe 
                    nodeName="div" 
                    className="VaroBoy__contact-swipe"
                    onSwipedRight={closeContactWindow}
                    detectTouch = {true}
                >
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction="right"
                        className={isOpen ? "VaroBoy__contact--drawer open" : "VaroBoy__contact--drawer"}
                        style={{width: "330px", height: "100%", background: "#333333", bottom: "0"}}
                    >   
                        <a onClick={closeContactWindow} className="VaroBoy__close-btn"></a>
                        <div className="VaroBoy__headline">
                            <h2 className="VaroBoy__title">Contact</h2>
                        </div>
                        <div className="VaroBoy__contact">
                            <div className="VaroBoy__contact-container">
                                <div className="VaroBoy__contact-primary">
                                    <h2>📞 +61 404 236 250</h2>
                                </div>
                                <div className="VaroBoy__contact-primary">
                                    <h2>📧 hello@varoboy.com</h2>
                                </div>
                                <div className="VaroBoy__contact-social">
                                    <ul>
                                        <li className="VaroBoy__contact-social--facebook">
                                            <FacebookIcon/>
                                        </li>
                                        <li className="VaroBoy__contact-social--instagram">
                                            <InstagramIcon/>
                                        </li>
                                        <li className="VaroBoy__contact-social--linkedin">
                                            <LinkedinIcon/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="VaroBoy__subscribe">
                            <h2>📰 Get Newsletter</h2>
                            <div className="VaroBoy__subscribe-field">
                                <input type="text" />
                                <label>First Name</label>
                            </div>
                            <div className="VaroBoy__subscribe-field"> 
                                <input type="email" />
                                <label>Email</label>
                            </div>
                            <PrimaryBtn title="Subscribe"/>
                        </div>
                    </Drawer>
                </Swipe>
            </div>
        </>   
    )
}

export default Contact