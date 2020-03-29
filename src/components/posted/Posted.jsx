import React from 'react';
import { postedService } from '../../services/posted.service';

export class Posted extends React.Component {
    constructor(props) {
        super(props);
        this.state = { NewVote: null };
    }

    componentDidMount() {
        this.setState({ NewVote: this.props.posted.votes });
    }

    async like() {
        await this.setState({ NewVote: this.state.NewVote + 1 });
        let posted = {
            id: this.props.posted.id,
            description: this.props.posted.description,
            votes: this.state.NewVote
        };
        await postedService.updatePosted(posted);
    }

    render() {
        return (
            <div className="Posted">
                <div className="Posted-title">
                    <div className="Posted-title-heap">Post</div>
                    <div className="Posted-title-space"></div>
                    <div className="Posted-title-num">
                        {this.props.posted.id}
                    </div>
                </div>
                <div className="Posted-description">
                    {this.props.posted.description}
                </div>
                <div className="Posted-footer">
                    <button
                        type="button"
                        className="btn btn-danger btn-circle"
                        onClick={() => this.like()}
                    >
                        <i className="glyphicon glyphicon-heart"></i>
                    </button>
                    <div className="Posted-footer-space"></div>
                    <div className="Posted-footer-vote">
                        vote {this.state.NewVote}
                    </div>
                </div>
            </div>
        );
    }
}
