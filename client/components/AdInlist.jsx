import React from 'react';
import Paper from 'material-ui/Paper';

const AdInlist = React.createClass({
    render() {
        const style = { marginBottom: "15px" };

        return (
            <div className="columns large-12">
                <Paper style={style} zDepth={1} className='aditem'>
                    <a href="#" className='aditem__title'>{this.props.title}</a>
                    <div className='aditem__text'>{this.props.children}</div>
                    <div className='aditem__props'>
                        <span className='age'>{this.props.age} лет</span> 
                        <span className='location'>Город: {this.props.locationName}</span> 
                        <span className='created'>Добавлено: {this.props.createdAd} ,</span> 
                        <span className='looking'>{this.props.gender} ищет {this.props.findGender}</span> 
                        <span className=''></span> 
                    </div>
                </Paper>
            </div>
        );
    }
});

export default AdInlist;
