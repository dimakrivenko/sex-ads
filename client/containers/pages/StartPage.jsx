import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadAds } from '../../actions/AdsActions'

import StartPage from '../../components/pages/StartPage.jsx';

export class StartPageContainer extends Component {


    render() {
        //const { isLoading, createdPoll, error } = this.props;

        return (
            <div>
                

                <StartPage />
            </div>
        );

        // return (
        //     <StartPage
        //         createdPoll={createdPoll}
        //         isLoading={isLoading}
        //         error={error}
        //         onPollCreate={this.handleCreatePoll.bind(this)}
        //     />
        // );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: '',
        createdPoll: '',
        error: ''
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadAds: bindActionCreators(loadAds, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPageContainer);
