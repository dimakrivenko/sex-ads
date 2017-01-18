import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Admin from '../../components/pages/AdminPage.jsx';

export class AdminPageContainer extends Component {


    render() {
        //const { isLoading, createdPoll, error } = this.props;

        return (
        	<div className='row l-admin-page'>
            	<Admin />
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer)