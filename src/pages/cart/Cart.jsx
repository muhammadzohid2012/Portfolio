import "./Cart.css"
import service1 from "../../../src/images/logo-service1.png"
import service2 from "../../images/logo-service2.png"
import service3 from "../../images/logo-service3.png"
import service4 from "../../images/logo-service4.png"
import service5 from "../../images/logo-service5.png"
import service6 from "../../images/logo-service6.png"
const Service = () => {
    return (
        <section className="Service">
            <div className="service1">
                <h1>Our Service</h1>
                <p>We turn information into actionable insights We work to understand your issues
                    and are driven to ask better questions in the pursuit of making work.</p>
            </div>
            <div className="service2">
                <div className="card1">
                    <img src={service1} alt="" />
                    <h3>Order Management</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                    <div className="cards1">
                        <p>Learn more</p>
                        <a href="/">

                        </a>
                    </div>
                </div>
                <div className="card2">
                    <img src={service2} alt="" />
                    <h3>Social Assistant</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                    <div className="cards2">
                        <p>Learn more</p>
                        <a href="/">

                        </a>
                    </div>
                </div>
                <div className="card3">
                    <img src={service3} alt="" />
                    <h3>Crypto Platform</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                    <div className="cards3">
                        <p>Learn more</p>
                        <a href="/">

                        </a>
                    </div>
                </div>
                <div className="card4">
                    <img src={service4} alt="" />
                    <h3>Smart Trading Modules</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                    <div className="cards4">
                        <p>Learn more</p>
                        <a href="/">

                        </a>
                    </div>
                </div>
                <div className="card5">
                    <img src={service5} alt="" />
                    <h3>Analyzer of the News</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                    <div className="cards5">
                        <p>Learn more</p>
                        <a href="/">

                        </a>
                    </div>
                </div>
                <div className="card6">
                    <img src={service6} alt="" />
                    <h3>Module of Price Notification</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                    <div className="cards6">
                        <p>Learn more</p>
                        <a href="/">

                        </a>
                    </div></div>
            </div>

        </section>
    )
}

export default Service