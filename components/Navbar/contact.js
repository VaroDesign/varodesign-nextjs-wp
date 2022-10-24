import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import FacebookIcon from "../../public/icons/facebook.svg"
import InstagramIcon from "../../public/icons/instagram.svg"
import LinkedinIcon from "../../public/icons/linkedin.svg"
import useWindowDimensions from "../../hooks/useWindowDimensions"

const Contact = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const { width } = useWindowDimensions();

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
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction={width <= 900 ? "top" : "right"}
                    className='VaroBoy__drawer'
                >
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
                            <input type="text" placeholder="First Name" />
                            <input type="email" placeholder="email address" />
                            <button>Subscribe</button>
                    </div>
                </Drawer>
            </div>
        </>   
    )
}

export default Contact