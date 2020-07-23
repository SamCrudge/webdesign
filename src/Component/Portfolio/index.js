import React from "react";

import './portfolio.css';
import './CaseStudy/caseStudy.css';

import PortfolioPage from "./PortfolioPage";
import CaseStudy from "./CaseStudy/CaseStudy";

const page0 = {
    id: 0,
    name: "Artist gallery: bluesungfruit",
    deskImage: require("../../Assets/portfolio/portfolio_bsf_1.jpg"),
    mobImage: require("../../Assets/portfolio/portfolio_bsf_2.jpg"),
    desc: "In Sicily, women are more dangerous than shotguns. Vito, how do you like my little angel? Isn't she beautiful? If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. I am sorry. What happened to your father was business. I have much respect for your father. But your father, his thinking is old-fashioned. You must understand why I had to do that. Now let's work through where we go from here."
};
const page1 = {
    id: 1,
    name: "Victoria Hill Acupuncture",
    deskImage: require("../../Assets/portfolio/portfolio_vha_1.jpg"),
    mobImage: require("../../Assets/portfolio/portfolio_vha_2.jpg"),
    desc: "In Sicily, women are more dangerous than shotguns. Vito, how do you like my little angel? Isn't she beautiful? If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. I am sorry. What happened to your father was business. I have much respect for your father. But your father, his thinking is old-fashioned. You must understand why I had to do that. Now let's work through where we go from here."
};
const page2 = {
    id: 2,
    name: "The Forester & Flower",
    deskImage: require("../../Assets/portfolio/portfolio_ff_1.jpg"),
    mobImage: require("../../Assets/portfolio/portfolio_ff_2.jpg"),
    desc: "Now, it is a fact, gentlemen, as you may see for yourselves, that my hair is of a very full and rich tint, so that it seemed to me that if there was to be any competition in the matter I stood as good a chance as any man that I had ever met. Vincent Spaulding seemed to know so much about it that I thought he might prove useful, so I just ordered him to put up the shutters for the day and to come right away with me. He was very willing to have a holiday, so we shut the business up and started off for the address that was given us in the advertisement."
};

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            deskImage: '',
            mobImage: '',
            desc: ''
        };
        this.caseStudyPop = this.caseStudyPop.bind(this);
        this.caseStudyExit = this.caseStudyExit.bind(this);
        this.nextCaseStudy = this.nextCaseStudy.bind(this);
        this.prevCaseStudy = this.prevCaseStudy.bind(this);
    }
    caseStudyPop = (id, name, deskImage, mobImage, desc) => {
        this.setState({
            id: id,
            name: name,
            deskImage: deskImage,
            mobImage: mobImage,
            desc: desc
        });
        document.querySelector('.CaseStudy').classList.toggle('caseOpen');
        setTimeout(() => { document.querySelector('.CaseBase').classList.toggle('viewCaseStudy') }, 100);
        setTimeout(() => { document.querySelector('.CaseWindow').classList.toggle('viewCaseStudy') }, 700);
        setTimeout(() => { document.querySelectorAll('.caseStudyButtons').forEach(e => e.classList.toggle('caseClosed')) }, 750);
    }
    caseStudyExit = () => {
        document.querySelectorAll('.caseStudyButtons').forEach(e => e.classList.toggle('caseClosed'));
        document.querySelector('.CaseWindow').classList.toggle('viewCaseStudy');
        setTimeout(() => { document.querySelector('.CaseBase').classList.toggle('viewCaseStudy') }, 300);
        setTimeout(() => { document.querySelector('.CaseStudy').classList.toggle('caseOpen') }, 400);
        setTimeout(() => { this.setState({ id: '', name: '', deskImage: '', mobImage: '', desc: '' }); }, 500);
    }
    nextCaseStudy = () => {
        if (this.state.id === 0) {
            this.setState({...page1});
        } else if (this.state.id === 1) {
            this.setState({...page2});
        } else if (this.state.id === 2) {
            this.setState({...page0});
        }
    }
    prevCaseStudy = () => {
        if (this.state.id === 0) {
            this.setState({...page2});
        } else if (this.state.id === 1) {
            this.setState({...page0});
        } else if (this.state.id === 2) {
            this.setState({...page1});
        }
    }

    render() {

        return (
            <div className="Portfolio">
                <h1>PORTFOLIO</h1>
                <div className="portfolioBlock">
                    <PortfolioPage
                        clickHandler={this.caseStudyPop}
                        {...page0}
                    />
                    <PortfolioPage
                        clickHandler={this.caseStudyPop}
                        {...page1}
                    />
                    <PortfolioPage
                        clickHandler={this.caseStudyPop}
                        {...page2}
                    />
                </div>
                <div className="prevCase casePrevNext caseStudyButtons caseClosed" onClick={this.prevCaseStudy}>&#x2039;</div>
                <div className="nextCase casePrevNext caseStudyButtons caseClosed" onClick={this.nextCaseStudy}>&#x203A;</div>
                <div className="exitCaseStudy caseStudyButtons caseClosed" onClick={this.caseStudyExit}>&#10006;</div>
                <div className="CaseStudy">
                    <div className="CaseBase" onClick={this.caseStudyExit} />
                    <div className="CaseWindow">
                        <CaseStudy id={this.state.id}
                                   name={this.state.name}
                                   deskImage={this.state.deskImage}
                                   mobImage={this.state.mobImage}
                                   desc={this.state.desc} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio