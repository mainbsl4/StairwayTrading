


import productImage from "../../../assets/products/LAB/MiniDryerDescrip.png"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function MiniDryer (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/LabEsuipment/modulabSBM">Modulab SBM</Link>
                    <Link className="link" to="/LabEsuipment/redkromeii">REDKROME II</Link>
                    <Link className="link" to="/LabEsuipment/miniSimplex">MINISIMPLEX</Link>
                    <Link className="link" to="/LabEsuipment/labHank">Lab HANK</Link>
                    <Link className="link" to="/LabEsuipment/miniJET">MINIJET</Link>
                    <Link className="link" to="/LabEsuipment/texair">TEXAIR</Link>
                    <Link className="link" to="/LabEsuipment/zp400">ZP400</Link>
                    <Link className="link" to="/LabEsuipment/miniDryer">Mini Dryer</Link>
                    <Link className="link" to="/LabEsuipment/smallLotsDryer">Small lots dryer</Link>
                    <Link className="link" to="/LabEsuipment/colourLight">Colour Light</Link>
                    <Link className="link" to="/LabEsuipment/phCube">pH CUBE</Link>
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>Mini Dryer</h4>
                        <p>Laboratory Dryer, suitable for sample package, skeins, tops and fabric.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Laboratory Dryer, suitable for sample package, skeins, tops and fabric.</p>
                        {/* <span></span> */}
                        {/* <p>Preparation of solutions, expired and/or finished stock solutions & Automatic washing of the bottles.</p> */}
                        {/* <span></span> */}
                        {/* <p>Automatic liquor ratio.</p> */}
                        {/* <span></span> */}
                        <p>UGOLINI – Italy</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default MiniDryer;