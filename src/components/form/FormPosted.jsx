import React from 'react';
import { postedService } from '../../services/posted.service';

export class FormPosted extends React.Component {
    constructor(props) {
        super(props);
        this.state = { NewDescription: '', postedFromApi: null };
    }

    setDescriptionHandler = event => {
        this.setState({ NewDescription: event.target.value });
    };

    async save() {
        let posted = {
            id: this.props.lastId + 1,
            description: this.state.NewDescription,
            votes: 0
        };
        await postedService.savePosted(posted);

        await postedService.getAllPosted().then(data => {
            this.setState({
                postedFromApi: data
            });
        });
        this.sendData();
        this.clean();
    }

    sendData = () => {
        this.props.parentCallback(this.state.postedFromApi);
    };

    clean() {
        this.setState({ NewDescription: '' });
    }

    render() {
        return (
            <div className="FormPosted">
                <h2>Tell me!</h2>
                <form ref={el => (this.form = el)}>
                    <textarea
                        className="form-control"
                        placeholder="Tell me in 30 words how you feel..."
                        maxLength="35"
                        rows="5"
                        value={this.state.NewDescription}
                        onChange={this.setDescriptionHandler}
                    ></textarea>
                    <br></br>
                </form>
                <div className="FormPosted-Action">
                    <button
                        id="btnClean"
                        className="btn btn-danger btn-action"
                        onClick={() => this.clean()}
                    >
                        Clean
                    </button>
                    <button
                        id="btnSave"
                        className="btn btn-primary btn-action"
                        onClick={() => this.save()}
                    >
                        Save
                    </button>
                </div>
            </div>
        );
    }
}
