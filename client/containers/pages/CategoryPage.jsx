import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Category from '../../components/pages/CategoryPage.jsx';
import { loadAds } from '../../actions/AdsActions'

export class CategoryPageContainer extends Component {

	// Загрузить список объявлений
    componentDidMount () {
        this.props.loadAds()
    }

    render() {
    	const { listAds } = this.props
        const { loadAds } = this.props.loadAds
        //const { isLoading, createdPoll, error } = this.props;

        return (
        	<div className="row l-category-page">
        		<div className="columns large-12 filter">
        			<div className="">Filter</div>
        		</div>
            	<Category listAds={listAds}/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        listAds: state.listAds
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadAds: bindActionCreators(loadAds, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPageContainer)