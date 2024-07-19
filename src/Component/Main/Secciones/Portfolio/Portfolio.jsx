import './Portfolio.css'

const Portfolio = () => {
    return (
        <section id="portfolio">

            <section className="portfolio-contenedor">

                <h2>Mi <span>Portfolio</span></h2>

                <section className="portfolio-proyectos">

                    <div>
                        <a href="https://rpjunco.github.io/Travel-Agency-Login-page/" target="_blank"><img src="./img/portfolio/travel-agency-login-page.PNG" class="img-proyecto" alt="Travel-Agency-Login-page" /></a>
                    </div>
                    <div>
                        <a href="https://rpjunco.github.io/What-we-offer-section-design/" target="_blank"><img src="./img/portfolio/what-do-we-offer.PNG" class="img-proyecto" alt="What-dowe-offer" /></a>
                    </div>
                    <div>
                        <a href="https://github.com/RPJunco/soccer-card-menu/tree/main" target="_blank"><img src="./img/portfolio/soccer-cards-menu.PNG" class="img-proyecto" alt="soccer-cards-menu" /></a>
                    </div>

                </section>

                <section className="portfolio-proyectos">

                    <div>
                        <a href="https://github.com/RPJunco/records-management/tree/main" target="_blank"><img src="./img/portfolio/records-management.PNG" class="img-proyecto" alt="records-management" /></a>
                    </div>
                    <div>
                        <a href="https://github.com/RPJunco/character-and-list-processing/tree/main" target="_blank"><img src="./img/portfolio/character-treatment.PNG" class="img-proyecto" alt="character-and-list-processing" /></a>
                    </div>
                    <div>
                        <a href="https://github.com/RPJunco/article-management" target="_blank"><img src="./img/portfolio/strings-treatment.PNG" class="img-proyecto" alt="strings-treatment" /></a>
                    </div>

                </section>

            </section>

        </section>
    )
};

export default Portfolio;