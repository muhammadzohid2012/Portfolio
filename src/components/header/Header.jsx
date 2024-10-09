import "./Header.css"
import Logo from "../../images/Logo.png"
const Header = () => {
    return (
        <section className="header">
            <img src={Logo} alt="" />
            <div className="Header">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Service</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
                <button>Contact Us</button>
            </div>
        </section>
    )
}

export default Header