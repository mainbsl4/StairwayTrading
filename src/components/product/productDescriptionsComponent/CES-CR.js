

import productImage from "../../../assets/products/LAB/SalceDescription.png"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function CESCR (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/"><span>Link</span></Link>
                    <Link className="link" to="/"><span>Link</span></Link>
                    <Link className="link" to="/"><span>Link</span></Link>
                    <Link className="link" to="/"><span>Link</span></Link>
                    <Link className="link" to="/"><span>Link</span></Link>
                    <Link className="link" to="/"><span>Link</span></Link>
                    <Link className="link" to="/"><span>Link</span></Link>
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>MODULAB SBM</h4>
                        <p>SALCE's Modulab SBM, handle complete automatically both the liquids and the powders and volumetric dispenser with integrated dyeing units.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Real-time check of the accuracy of each dosing; Scale accuracy : +/- 0.001gr</p>
                        {/* <span></span> */}
                        <p>Preparation of solutions, expired and/or finished stock solutions & Automatic washing of the bottles.</p>
                        {/* <span></span> */}
                        <p>Automatic liquor ratio.</p>
                        {/* <span></span> */}
                        <p>Interface with all the most common Colour Matching Systems.</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default CESCR;