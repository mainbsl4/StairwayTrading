// import { Link } from "react-router-dom";
import backgroundImage from "../../assets/backgroundImage/stairway-trading-mission-and-vision.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";
import PartnersCard from "../smallSections/partnersCard";

// Partnars image 

import BecatronAGLogo from "../../assets/Business Partner/BecatronAGLogo.jpg";
import pozziLogo from "../../assets/Business Partner/pozziLogo.jpg"
import SALCELogo from "../../assets/Business Partner/SALCELogo.jpg"
import Testa from "../../assets/Business Partner/Testa.jpg"
import UGOLINI from "../../assets/Business Partner/UGOLINI.jpg"
import UgoliniLabLogo from "../../assets/Business Partner/UgoliniLabLogo.jpg"


// Partnars image 


function BusinessPartners () {

    const blank = "_blank";

    return(
        <section className="BusinessPartners">


        <BannerOrMiniImage banner={backgroundImage}/>



        <div className="BusinessPartnersSection">
            <div className="sectionHeader">
                <h3>Business Partners</h3>
                <span className="headerAnimation"></span>
            </div>

            <div className="cardHeadDiscriptios">
                <div className="forGroup">
                    <h3>We provide awesomeness!</h3>
                    <p>Smart lab machines Increase reproducibility from lab to bulk production.</p>
                </div>

                <div className = "CardBody">
                    <a className = "productLink" href="https://www.becatron.ch" target={blank}><PartnersCard image={BecatronAGLogo} head = {"Becatron AG"} body ={"Dye house automation & indigo monitoring system."} /></a>
                    <a className = "productLink" href="https://pozzi.it" target={blank}><PartnersCard image={pozziLogo} head = {"Pozzi Leopoldo"} body ={"Heat recovery, Chemical, dyestuff dispensing & distributions."} /></a>
                    <a className = "productLink" href="http://www.salce.it" target={blank}><PartnersCard image={SALCELogo} head = {"Salce srl"} body ={"Lab dispensing & Dyeing system."} /></a>
                    <a className = "productLink" href="https://www.testagroup.eu/en" target={blank}><PartnersCard image={Testa} head = {"Testa Group srl"} body ={"Automatic fabric inspection & Cutting optimization."} /></a>
                    <a className = "productLink" href="https://www.ugolini.net" target={blank}><PartnersCard image={UGOLINI} head = {"UGOLINI srl"} body ={"Dyeing machine."} /></a>
                    <a className = "productLink" href="https://www.ugolab.net" target={blank}><PartnersCard image={UgoliniLabLogo} head = {"UGOLAB"} body ={"Lab machinery for dye house."} /></a>
                </div>
                {/* <i>CEO/STAIRWAY</i> */}
            </div>
        </div>
    </section>
    );
};

export default BusinessPartners;