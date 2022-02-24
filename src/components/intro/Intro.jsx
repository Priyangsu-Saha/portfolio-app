import "./intro.css";
import vector from "../../img/4136917.svg";
const Intro = () => {
  return (
    <>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, my name is</h2>
            <h1 className="i-name">Priyangsu Saha</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Frontend Developer</div>
                <div className="i-title-item">Graphic Designer</div>
              </div>
            </div>
            <p className="i-desc">
              Thanks for showing interest in me, currently I am persuing my
              B.Tech degree in <b>Information Technology</b> from Sikkim Manipal
              Institute of Technology, also side ways interning at Edzest
              Educational Services as a <b>Frontend Developer Intern</b>.
              Looking forward to work with new technology and have a good grip
              over the role.
            </p>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={vector} alt="" className="i-img"></img>
        </div>
      </div>
    </>
  );
};

export default Intro;
