import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import python from "../assets/img/python.png";
import sql from "../assets/img/sql.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import react from "../assets/img/react.png"
import ml from "../assets/img/ml.png"
import figma from "../assets/img/figma.png"
import git from "../assets/img/git.png"
export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
          < div className="container">
            <div className="row">
                <div className="col-12">
                <div className="skill-box wow zoomIn">
                    <h2>
                        Skills 
                    </h2>
                    <p></p>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img src={python} alt="Image" />
                            <h5>python</h5>
                        </div>
                        <div className="item">
                            <img src={sql} alt="Image" />
                            <h5>SQL</h5>
                        </div>
                        <div className="item">
                            <img src={ml} alt="Image" />
                            <h5>Machine Learning</h5>
                        </div>
                        <div className="item">
                            <img src={html} alt="Image" />
                            <h5>HTML</h5>
                        </div>
                        <div className="item">
                            <img src={css} alt="Image" />
                            <h5>CSS</h5>
                        </div>
                        <div className="item">
                            <img src={javascript} alt="Image" />
                            <h5>javascript</h5>
                        </div>
                        <div className="item">
                            <img src={react} alt="Image" />
                            <h5>react</h5>
                        </div>
                        <div className="item">
                            <img src={figma} alt="Image" />
                            <h5>figma</h5>
                        </div>
                        <div className="item">
                            <img src={git} alt="Image" />
                            <h5>git</h5>
                        </div>

                    </Carousel>
                  </div>
                </div>
            </div>
          </div>
        </section>
      )
}