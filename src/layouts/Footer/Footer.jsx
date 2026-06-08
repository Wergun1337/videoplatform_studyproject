import Socials from '@/components/Socials'
import './Footer.scss'

const Footer = () =>{
    const menuItems = [
        {
        title: 'Home',
        links: ['Categories', 'Devices', 'Prices', 'FAQ'],
        },
        {
        title: 'Movies',
        links: ['Genres', 'Trendings', 'New Releases', 'Popular'],
        },
        {
        title: 'Shows',
        links: ['Genres', 'Trendings', 'New Releases', 'Popular'],
        },
        {
        title: 'Support',
        links: ['Contact Us'],
        },
        {
        title: 'Subscription',
        links: ['Plans', 'Features'],
        },
        {
        title: 'Connect with us',
        socialLinks: [
            {
                label: 'Facebook',
                iconName: 'facebook'
            },
            {
                label: 'Twitter',
                iconName: 'twitter'
            },
            {
                label: 'Linkedin',
                iconName: 'linkedin'
            }
        ],
        },
        
    ]

    const extraLinks = ['Terms of use', 'Privacy Policy', 'Cookie Policy']

    return (
    <footer className="footer">
        <div className="footer__inner container">
            <nav className="footer__menu">
                {menuItems.map( ({title, links, socialLinks}, index) => (
                    <div className="footer__menu-column" key={index}>
                        <a href="" className="footer__menu-title h6">{title}</a>
                        {links?.length > 0 && (
                            <ul className="footer__menu-list">
                                {links.map((link, index) => (
                                    <li className="footer__menu-item" key={index}>
                                        <a href="/" className="footer__menu-link">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {socialLinks?.length > 0 &&(
                            <Socials className="footer__soc1als" links={socialLinks} />
                        )}
                    </div>
                ))}
            </nav>
            <div className="footer__extra">
                <p className="footer__copyright">
                    @2026, vibes, All Rights Reserved
                </p>

                <div className="footer__extra-links">
                    {extraLinks.map((link, index) => (
                        <a className='footer__extra-link' href='/' key={index}>
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer