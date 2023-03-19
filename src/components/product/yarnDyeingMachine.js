import { Link } from "react-router-dom";
import backgroundImage from "../../assets/backgroundImage/Yarn-Dyeing-Machine.jpg";
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";
import PartnersCard from "../smallSections/partnersCard";



import GSESeriesDescription from "../../assets/products/Yarn Dyeing/GSE–seriesDescription.jpg";
import GSHSeriesDescription from "../../assets/products/Yarn Dyeing/GSH-seriesDescription.jpg";
import sp110Descrip from "../../assets/products/Yarn Dyeing/sp110Descrip.jpg";
import SPSimplexLanding from "../../assets/products/Yarn Dyeing/SPSimplexDescrip.jpg";
import HANKSLanding from "../../assets/products/Yarn Dyeing/HANKSLanding.jpg";
import CarrierLanding from "../../assets/products/Yarn Dyeing/CarrierLanding.jpg";





function YarnDyeingMachine () {

    return(
        <section className="YarnDyeingMachine">


            <BannerOrMiniImage banner={backgroundImage}/>



            <div className="YarnDyeingMachineSection">
                <div className="sectionHeader">
                    <h3>Yarn Dyeing Machine</h3>
                    {/* <span className="headerAnimation"></span> */}
                </div>

                <div className = "CardBody">
                    <Link className = "productLink" to='/LabEsuipment/gseSeries'><PartnersCard image={GSESeriesDescription} head = {"GSE – Series"} body ={"HTHP Bulk Yarn Dyeing Machine."} address = {"UGOLINI – Italy"} /></Link>
                    <Link className = "productLink" to='/LabEsuipment/gshSeries'><PartnersCard image={GSHSeriesDescription} head = {"GSH – Series"} body ={"Horizontal Yarn Dyeing Machine"} address = {"UGOLINI – Italy"} /></Link>
                    <Link className = "productLink" to='/LabEsuipment/sp110series'><PartnersCard image={sp110Descrip} head = {"SP110 – Series"} body ={"Small lots dyeing Machine."} address = {"UGOLINI – Italy"} /></Link>
                    <Link className = "productLink" to='/LabEsuipment/spSimpleSeries'><PartnersCard image={SPSimplexLanding} head = {"SP Simplex – Series"} body ={"Sample Dyeing Machine"} address = {"UGOLINI – Italy"} /></Link>
                    <Link className = "productLink" to='/LabEsuipment/hankSeries'><PartnersCard image={HANKSLanding} head = {"HANK – Series"} body ={"HANK Dyeing Machine"} address = {"UGOLINI – Italy"} /></Link>
                    <Link className = "productLink" to='/LabEsuipment/carriers'><PartnersCard image={CarrierLanding} head = {"Carriers"} body ={""} address = {"UGOLINI – Italy"} /></Link>
                </div> 
            </div>
        </section>
    );
};

export default YarnDyeingMachine;