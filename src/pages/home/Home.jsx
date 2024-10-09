import "./Home.css"
import img from "../../images/Saly-19.png"
const Home = () => {
  return (
    <div className='home'>
        <div className="home2">
            <p>Virtual Reality <br /> Business Solutions</p>
            <h3>We have over 15 year exprience in business consultting arena. We have over <br />
             15 year exprience in business consultting arena and artficial intelligence.</h3>
             <button className="btn">join us</button>
             <button className="btn1">watch video</button>
        </div>
        <img src= {img} alt="" />
        <br />
    </div>
  )
}

export default Home