import './Portfolio.css'

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio container-fluid">

            <div className="text-center mb-5">
                <h2 className="m-5">Mi <span>Portfolio</span></h2>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <a href="https://rpjunco.github.io/Travel-Agency-Login-page/" target="_blank">
                        <img src="./img/portfolio/travel-agency-login-page.PNG" className="img-proyecto" alt="Travel-Agency-Login-page" />
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <a href="https://rpjunco.github.io/What-we-offer-section-design/" target="_blank">
                        <img src="./img/portfolio/what-do-we-offer.PNG" className="img-proyecto" alt="What-dowe-offer" />
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <a href="https://github.com/RPJunco/soccer-card-menu/tree/main" target="_blank">
                        <img src="./img/portfolio/soccer-cards-menu.PNG" className="img-proyecto" alt="soccer-cards-menu" />
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <a href="https://github.com/RPJunco/records-management/tree/main" target="_blank">
                        <img src="./img/portfolio/records-management.PNG" className="img-proyecto" alt="records-management" />
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <a href="https://github.com/RPJunco/character-and-list-processing/tree/main" target="_blank">
                        <img src="./img/portfolio/character-treatment.PNG" className="img-proyecto" alt="character-and-list-processing" />
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <a href="https://github.com/RPJunco/article-management" target="_blank">
                        <img src="./img/portfolio/strings-treatment.PNG" className="img-proyecto" alt="strings-treatment" />
                    </a>
                </div>
            </div>

        </section>
    )
};

export default Portfolio;