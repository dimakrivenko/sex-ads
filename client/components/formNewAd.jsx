import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import cityList from '../utils/cityList';
import { Field, reduxForm } from 'redux-form';
import {
  Checkbox,
  SelectField,
  TextField,
  AutoComplete
} from 'redux-form-material-ui'

const formNewAd = props => {
    const { handleSubmit, reset } = props

    // Форма
    // Название
    // handleTitleChange (event, value) { this.setState({  title: value }) }, 
    // // Текст
    // handleTextChange (event, value) { this.setState({ text: value }) },
    // // Кто вы?
    // handleGenderChange (event, index, value) { this.setState({gender: value}) },
    // // Кого вы ищите
    // handleFindGenderChange (event, index, value) { this.setState({findGender: value}) },
    // // Категория
    // handleCategoryChange (event, index, value) { this.setState({category: value}) },
    // // Возраст
    // handleAgeChange (event, value) { this.setState({ age: value }) },
    // // Город
    // handleLocationChange (event, value) {
    //     // console.log(value)
    // },
    // handleLocationNewRequest (event, value) { this.setState({ locationName: cityList[value] }) },
    // // E-mail
    // handleEmailChange (event, value) { this.setState({ email: value }) },

    

	return (
        <form className="row dialog-new-ad" onSubmit={handleSubmit}>

            <div className="column large-12">
                <input type="submit" value="submit" />
            </div>
            <div className="column large-12">
                <Field  
                    name="inputTitle"
                    component={TextField} 
                    hintText="Мужчина 36 лет, ищу женщину для секса"
                    floatingLabelText="Заголовок объявления"
                    fullWidth={true}
                    // onChange={this.handleTitleChange}
                />
            </div>
            <div className="column large-12">
                <Field
                    name="inputText"
                    component={TextField} 
                    hintText="Текст объявления не менее 50 символов"
                    floatingLabelText="Текст объявления"
                    multiLine={true}
                    rows={3}
                    fullWidth={true}
                    // onChange={this.handleTextChange}
                    
                />
                <p>0 / 50 символов</p>
            </div>
            <div className="column large-6">
                <Field
                    name="inputGender"
                    component={SelectField} 
                    floatingLabelText="Кто вы?"
                    // value={this.state.gender}
                    // onChange={this.handleGenderChange}
                    fullWidth={true}
                    
                >
                    <MenuItem value={'man'} primaryText="Мужчина" />
                    <MenuItem value={'woman'} primaryText="Женщина" />
                    <MenuItem value={'pair'} primaryText="Пара" />
                </Field>
            </div>
            <div className="column large-6">
                <Field
                    name="inputFindGender"
                    component={SelectField} 
                    floatingLabelText="Кого вы ищите?"
                    fullWidth={true}
                    // value={this.state.findGender}
                    // onChange={this.handleFindGenderChange}
                >
                    <MenuItem value={'man'} primaryText="Мужчину" />
                    <MenuItem value={'woman'} primaryText="Женщину" />
                    <MenuItem value={'pair'} primaryText="Пару" />
                </Field>
            </div>
            <div className="column large-6">
                <Field
                    name="inputCategory"
                    component={SelectField} 
                    floatingLabelText="Что вас интересует?"
                    fullWidth={true}
                    // value={this.state.category}
                    // onChange={this.handleCategoryChange}
                >
                    <MenuItem value={'no_obligation'} primaryText="Секс без обязательств" />
                    <MenuItem value={'lesbian'} primaryText="Лесби знакомства" />
                    <MenuItem value={'gay'} primaryText="Гей знакомства" />
                    <MenuItem value={'swing'} primaryText="Свинг знакомства" />
                    <MenuItem value={'virtual'} primaryText="Виртуальный секс" />
                </Field>
            </div>
            <div className="column large-6">
                <Field
                    name="inputAge"
                    component={TextField} 
                    hintText=""
                    floatingLabelText="Укажите ваш возраст"
                    fullWidth={true}
                    // onChange={this.handleAgeChange}
                />
            </div>
            <div className="column large-12">
                <div className="row">
                    <div className="column large-6">
                        <Field
                            name="inputLocation"
                            component={AutoComplete} 
                            hintText="Москва"
                            floatingLabelText="Укажите ваш город"
                            // onUpdateInput={this.handleLocationChange}
                            // onNewRequest={this.handleLocationNewRequest}
                            filter={AutoComplete.fuzzyFilter}
                            openOnFocus={true}
                            dataSource={cityList}
                            fullWidth={true}
                            
                        />
                    </div>
                    <div className="column large-6">
                        <Field
                            name="inputEmail"
                            component={TextField} 
                            hintText="youmail@mail.ru"
                            floatingLabelText="Укажите ваш E-mail"
                            // onChange={this.handleEmailChange}
                            fullWidth={true}
                            
                        />
                    </div>
                    <div className="column large-12">
                        <p style={{ lineHeight: '18px', fontSize: '14px', margin: '10px 0 15px 0'}}>Вы должны согласиться с <a href="#">пользовательским соглашением</a>, а также с передачей и обработкой своих данных, подтвердить своё совершеннолетие и ответственность за размещение объявления.</p>
                        <Field
                            name="inputAgrement"
                            component={Checkbox} 
                            label="Я согласен с правилами"
                        />
                    </div>
                </div>
            </div> 
        </form>
	)
}

export default reduxForm({
  form: 'formNewAd'
})(formNewAd);
