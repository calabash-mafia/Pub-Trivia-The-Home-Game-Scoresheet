'use strict';

class TriviaScoresheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: 'world'
        };
    }

    render() {
        var today = new Date(Date.now());
        return (
            <div>
                <h1 className="mt-5">Pub Trivia: The Home Game</h1>
                <p>Online scorecard for {today.toDateString()}</p>
            </div>
        );
    }
}

const domContainer = document.querySelector('#trivia_scoresheet');
ReactDOM.render(React.createElement(TriviaScoresheet), domContainer);
