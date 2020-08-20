import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions"

class StreamShow extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    // renderContent() {
    //     if (this.props.stream) {
    //         return <div className="header">
    //             {this.props.stream.title}
    //             {this.props.stream.description}
    //         </div>
    //     }
    // }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        console.log(this.props);

        const { title, description } = this.props.stream

        return (
            <div>
                <div>
                    <h1>{title}</h1>
                    <h5>{description}</h5>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}





export default connect(mapStateToProps, { fetchStream })(StreamShow);