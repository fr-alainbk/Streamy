import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal"
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";


class StreamDelete extends React.Component {

    renderActions() {
        const { id } = this.props.match.params
        return (
            <React.Fragment>
                <button
                    className="ui button negative"
                    onClick={() => this.props.deleteStream(id)}>
                    Delete
                </button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderContent() {
        return this.props.stream ?
            `Are you sure you want to delete the stream with title: "${this.props.stream.title}` :
            "Are you sure you want to delete this stream?"
    }

    render() {
        // if (!this.props.stream) {
        //     return <div>Loading...</div>
        // }
        // console.log(this.props);

        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                // content={`Are you sure you want to delete the stream "${this.props.stream.title}"?`}
                actions={this.renderActions()}
                onDismiss={() => history.push("/")}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}




export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);