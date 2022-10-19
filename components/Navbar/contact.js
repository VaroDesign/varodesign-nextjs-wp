import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Contact = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className="VaroBoy__navigation-nav--menu-item">
            <button onClick={toggleDrawer} className="VaroBoy__navigation-nav--link">
                <img src="/icons/contact.svg" className="nav-links" alt="contact-icon" height={27} />
                <p className="VaroBoy__navigation-nav--text-mobile">
                    Contact
                </p>
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='VaroBoy__drawer'
            >
                <div>Hello World</div>
            </Drawer>
            <span className="VaroBoy__tooltip">Contact</span>
        </div>
    )
}

export default Contact