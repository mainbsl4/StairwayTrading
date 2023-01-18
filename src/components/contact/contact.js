import backgroundImage from "../../assets/backgroundImage/contact-stairway-trading.jpg"
// import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";


function Contact () {

    return(
        <section className="Contact">


            <div className="banner">
                <img src={backgroundImage} alt="banner"/>
            </div>



            <div className="ContactSection">
                <div className="sectionHeader">
                    <h3>Contact</h3>
                    <span className="headerAnimation"></span>
                </div>

                {/* <div className="discriptionBox">
                    <ul>
                        <li>We do cordially welcome to our company and pleased to present you our product and service.</li>
                        <li>As we have experience with the textile industry for more than a decade, there are hundreds of the latest technology-driven machinery installed in our textile manufacturing facilities.</li>
                        <li>As a result, we find a number of happy customers and proved us a reliable, efficient service partner.</li>
                        <li>Discover this page you get an overview of our product and service if you have any inquiry please feel free to contact us.</li>
                    </ul>
                    <i>CEO/STAIRWAY</i>
                </div> */}
            </div>
        </section>
    )
}

export default Contact;