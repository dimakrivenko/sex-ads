import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
    render() {
        return (
            <div className='row'>
                <div className='columns large-12'>
                    <p>Страница не найдена. Вернуться на <Link to='/'>главную</Link></p>
                </div>
            </div>
        )
    }
}