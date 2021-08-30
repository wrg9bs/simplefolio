import React from 'react'
import { Link } from 'gatsby';
import { container, 
        heading, 
        navLinks,
        navLinkItem,
        navLinkItemText    } from './layout.module.css'


const Layout = ({pageTitle, children}) => {
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to='/' className={navLinkItemText}>Home</Link>
                    </li>
                    <li>
                        <Link to='/About' className={navLinkItemText}>About</Link>
                    </li>
                    <li>
                        <Link to='/Projects' className={navLinkItemText}>Projects</Link>
                    </li>
                    <li>
                        <Link to='/Blog' className={navLinkItemText}>Blog</Link>
                    </li>
                    <li>
                        <Link to='/Contact' className={navLinkItemText}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
            
        </div>
    )
}

export default Layout
