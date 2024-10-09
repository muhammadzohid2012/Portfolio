import "./Pricing.css"
import person1 from "../../images/person1.png"
import person2 from "../../images/person2.png"
import person3 from "../../images/person3.png"
import person4 from "../../images/person4.png"
import icon1 from "../../images/Icon.png"
import icon2 from "../../images/Icon.png"
import icon3 from "../../images/Icon.png"
import icon4 from "../../images/Icon.png"
const Pricing = () => {
    return (
        <section className="Pricing">
            <div className="pricing">
                <h2>Met Our Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
            </div>
            <div className="pricing1">
                <div className="pricing2">
                    <img src={person1} alt="" />
                    <h3>Sunny Khan</h3>
                    <p>Executive officer</p>
                    <img src={icon1} alt="" />
                </div>
                <div className="pricing3">
                    <img src={person2} alt="" />
                    <h3>Sunny Khan</h3>
                    <p>Executive officer</p>
                    <img src={icon2} alt="" />
                </div>
                <div className="pricing4">
                    <img src={person3} alt="" />
                    <h3>Sunny Khan</h3>
                    <p>Executive officer</p>
                    <img src={icon3} alt="" />
                </div>
                <div className="pricing5">
                    <img src={person4} alt="" />
                    <h3>Sunny Khan</h3>
                    <p>Executive officer</p>
                    <img src={icon4} alt="" />
                </div>
            </div>

        </section>
    )
}

export default Pricing