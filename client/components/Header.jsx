import React from 'react'
import MobileSidebar from './MobileSidebar.jsx';

import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link, IndexLink } from 'react-router';

const style = {
	raised: {
		verticalAlign: 'middle',
		margin: '12px 0 12px 20px',
	},
	floating: {
		verticalAlign: 'middle',
		margin: '10px 0 10px 10px',
	}
	
};

const Header = React.createClass({
	OpenDialogNewAd () {
		this.props.onOpenDialogNewAd()
	},
	cat_1 () { this.props.activeCategory('category-1') },
	cat_2 () { this.props.activeCategory('category-2') },
	cat_3 () { this.props.activeCategory('category-3') },
    render() {
    	return (
    		<header className="l-header">
    			<div className="row">
    				<div className="columns large-4 small-6 header__logo">
                    	<MobileSidebar/>
                    	<IndexLink to="/" className="logo" activeClassName="active">
                    		<span>Sex-Ads</span>
                    	</IndexLink>
    					<a href="/" className="logo"></a>
    				</div>
	    			<div className="columns large-8 small-6 header__menu">
	    				<ul>
    						<li><Link to="/admin" activeClassName="active">Админка</Link></li>
    						<li><Link to="/category-1" activeClassName="active" onClick={this.cat_1}>Категория 1</Link></li>
    						<li><Link to="/category-2" activeClassName="active" onClick={this.cat_2}>Категория 2</Link></li>
    						<li><Link to="/category-3" activeClassName="active" onClick={this.cat_3}>Категория 3</Link></li>
	    				</ul>
	    				<RaisedButton onTouchTap={this.OpenDialogNewAd} label="Добавить объявление" primary={true} style={style.raised} className="show-for-medium"/>
	    				<FloatingActionButton onTouchTap={this.OpenDialogNewAd} mini={true} style={style.floating} className="show-for-small-only">
					    	<ContentAdd />
					    </FloatingActionButton>
	    			</div>
    			</div>
    		</header>
    	)
    }
})

export default Header