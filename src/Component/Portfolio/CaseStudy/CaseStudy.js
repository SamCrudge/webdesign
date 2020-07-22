import React from "react";

class CaseStudy extends React.Component {

    componentDidUpdate(prevProps, prevState,snapshot) {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="CaseFile">
                <div className="CaseTitle">
                    &#10010; {this.props.name}
                </div>
                <div className="CaseDesc">
                    {this.props.desc}
                </div>
                <div className="CaseImg">
                    <img src={this.props.image} />
                </div>
            </div>
        )
    }
}

export default CaseStudy