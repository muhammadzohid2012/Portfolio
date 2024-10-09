import "./About.css";
import image from "../../images/market.png";
const About = () => {
  return (
    <div className="about">
      <div className="about2">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <p>
          We complete every projects <br />
          extra care as customer need
        </p>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
          dictum risus, <br />
          non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis
          nuncoe <br />
          scelerisque in. orem ipsum dolor sit amet, consectetur adipisicing
          elit. Labore <br />
          eius molestiae facere, natus reprehenderit eaque eum, autem ipsam.
          Magfini, <br />
          error. Tempora odit laborum iure inventore possimus laboriosam qui
          nam.{" "}
        </h4>
        <button>read more</button>
      </div>
    </div>
  );
};

export default About;
