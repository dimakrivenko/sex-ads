import React, { Component } from 'react';
 
export default class Footer extends Component {
    render() {
    	return (
    		<footer className="l-footer">
    			<div className="row">
    				<div className="columns large-2 medium-6 footer__menu">
	    				<ul>
	    					<li><a href="#">Блог</a></li>
	    					<li><a href="#">О сервисе</a></li>
	    				</ul>
	    			</div>
	    			<div className="columns large-2 medium-6 footer__menu">
	    				<ul>
	    					<li><a href="#">Контакты</a></li>
	    					<li><a href="#">Вопрос / Ответ</a></li>
	    				</ul>
	    			</div>
	    			<div className="columns large-4 medium-6 footer__menu">
	    				<ul>
	    					<li><a href="#">Конфиденциальность</a></li>
	    					<li><a href="#">Пользовательское соглашение</a></li>
	    				</ul>
	    			</div>
	    			<div className="columns large-4 medium-6 footer__social">
	    				<p className="gray">Мы в социальных сетях</p>
	    				<ul className="social-networks">
	    					<li><a href="#" className="vk"><i className="material-icons md-24">face</i></a></li>
	    					<li><a href="#" className="ok"><i className="material-icons">face</i></a></li>
	    					<li><a href="#" className="fb"><i className="material-icons">face</i></a></li>
	    					<li><a href="#" className="tw"><i className="material-icons">face</i></a></li>
	    				</ul>
	    			</div>
    			</div>
    			<div className="copyright">
    				<p>Sex-Ads.ru 2017 | © Все права защищены</p>
    			</div>
    		</footer>
    	)
    }
}

