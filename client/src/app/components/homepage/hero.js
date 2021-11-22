import './hero.scss';

const Hero = () => {

    return (
        <section className="hero">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 hero__left w-100 d-flex justify-content-end align-items-center pr-0">
                        <span>Graduaat Prog</span>
                    </div>
                    <div className="col-7 hero__right w-100 d-flex justify-content-start align-items-center pl-0">
                        <span>rammeren</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;