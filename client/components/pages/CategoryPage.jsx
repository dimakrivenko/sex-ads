import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import AdsList from '../AdsList.jsx';

export default class CategoryPage extends Component {
    render() {
    	const { listAds } = this.props

    	if(listAds.isLoading) {
    		return (
    			<div className="preloader">
	    			<CircularProgress />
	    		</div>
    		)
    	}

        return (
    	    <div className="l-ads-list-body">
	        	<AdsList listAds={listAds} />
        	</div>
        );
    }
}
