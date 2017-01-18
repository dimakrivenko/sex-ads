import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox';
import cityList from '../utils/cityList';
import Formsy from 'formsy-react';

import { FormsyCheckbox, FormsySelect, FormsyText, FormsyAutoComplete } from 'formsy-material-ui/lib';


const DialogNewAd = React.createClass({
    getInitialState () {
        return {
            visible: false,
            category: "no_obligation",
            title: "",
            text: "",
            age: null,
            email: "",
            gender: "man",
            findGender: "woman",
            locationName : "",
            textCount: 0,
            errorTitle: "",
            errorText: ""
        }
    },

    // Форма
    // Название
    handleTitleChange (event, value) {
        this.setState({  title: value })
        // Проверка на пустоту
        if (this.state.title === '') {
            this.setState({errorTitle: 'Заполните название объявления'}) }
        else { this.setState({errorTitle: ''}) }
    }, 
    // Текст
    handleTextChange (event, value) {
        this.setState({ text: value })
        this.setState({textCount: value.length})
        // Проверка на пустоту
        if (this.state.text === '') {
            this.setState({errorText: 'Заполните текст объявления'}) }
        else { this.setState({errorText: ''}) }
        // Проверка на количество символов
        if (this.state.textCount < 30) {
            this.setState({errorText: 'Количество символов должно быть не менее 30'}) }
        else { this.setState({errorText: ''}) }
        

    },
    // Кто вы?
    handleGenderChange (event, index, value) { this.setState({gender: value}) },
    // Кого вы ищите
    handleFindGenderChange (event, index, value) { this.setState({findGender: value}) },
    // Категория
    handleCategoryChange (event, index, value) { this.setState({category: value}) },
    // Возраст
    handleAgeChange (event, value) { this.setState({ age: value }) },
    // Город
    handleLocationChange (event, value) {
        // console.log(value)
    },
    handleLocationNewRequest (event, value) { this.setState({ locationName: cityList[value] }) },
    // E-mail
    handleEmailChange (event, value) { this.setState({ email: value }) },


    // Клик на submit в форме
    clickSubmitAddNewAd () { this.refs.submitBtn.click() },
    // Отправка формы
    submitAddNewAd (e) {
        e.preventDefault();
        const newAd = {
            visible: false,
            category: this.state.category,
            title: this.state.title,
            text: this.state.text,
            age: this.state.age,
            email: this.state.email,
            gender: this.state.gender,
            findGender: this.state.findGender,
            locationName : this.state.locationName
        }
        
        // Валидация полей формы
        // Название
        if (this.state.title === '') {
            this.setState({errorTitle: 'Заполните название объявления'}) }
        else { this.setState({errorTitle: ''}) }
        // Текст
        if (this.state.title === '') {
            this.setState({errorText: 'Заполните текст объявления'}) }
        else { this.setState({errorText: ''}) }
        

        
        
        // this.props.onAdAdd(newAd);

        // this.setState({ text: '', title: '', color: '#FFFFFF' }); нужно для сброса формы
    },
    formValidation () {

    },
    
    render() {
        const actions = [
          <FlatButton
            label="Закрыть"
            primary={true}
            onTouchTap={this.props.closeAction}
          />,
          <FlatButton
            label="Разместить объявление"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.clickSubmitAddNewAd}
          />,
        ];



        return (
            <div>
                <Dialog
                    title="Новое объявление"
                    actions={actions}
                    modal={false}
                    open={this.props.dialogState}
                    autoScrollBodyContent={true}
                    onRequestClose={this.props.closeAction}
                >
                    <form className="row dialog-new-ad" ref="qqqqq" onSubmit={this.submitAddNewAd}>
                        <div className="column large-12">
                            <TextField
                                hintText="Cимпатичный парень, ищу девушку для интимных отношений"
                                floatingLabelText="Заголовок объявления"
                                fullWidth={true}
                                onChange={this.handleTitleChange}
                                errorText={this.state.errorTitle}
                                ref="inputTitle"
                            />
                        </div>
                        <div className="column large-12">
                            <TextField
                                hintText="Ищу секса на постоянной основе. Место для встреч имеется. Отношения не важны."
                                floatingLabelText="Текст объявления"
                                multiLine={true}
                                rows={3}
                                fullWidth={true}
                                onChange={this.handleTextChange}
                                errorText={this.state.errorText}
                                ref="inputText"
                            />
                        </div>
                        <div className="column large-6">
                            <SelectField
                                floatingLabelText="Кто вы?"
                                value={this.state.gender}
                                onChange={this.handleGenderChange}
                                fullWidth={true}
                                name="inputGender"
                            >
                                <MenuItem value={'man'} primaryText="Мужчина" />
                                <MenuItem value={'woman'} primaryText="Женщина" />
                                <MenuItem value={'pair'} primaryText="Пара" />
                            </SelectField>
                        </div>
                        <div className="column large-6">
                            <SelectField
                                floatingLabelText="Кого вы ищите?"
                                value={this.state.findGender}
                                onChange={this.handleFindGenderChange}
                                fullWidth={true}
                                name="inputFindGender"
                            >
                                <MenuItem value={'man'} primaryText="Мужчину" />
                                <MenuItem value={'woman'} primaryText="Женщину" />
                                <MenuItem value={'pair'} primaryText="Пару" />
                            </SelectField>
                        </div>
                        <div className="column large-6">
                            <SelectField
                                floatingLabelText="Что вас интересует?"
                                value={this.state.category}
                                onChange={this.handleCategoryChange}
                                fullWidth={true}
                                name="inputCategory"
                            >
                                <MenuItem value={'no_obligation'} primaryText="Секс без обязательств" />
                                <MenuItem value={'lesbian'} primaryText="Лесби знакомства" />
                                <MenuItem value={'gay'} primaryText="Гей знакомства" />
                                <MenuItem value={'swing'} primaryText="Свинг знакомства" />
                                <MenuItem value={'virtual'} primaryText="Виртуальный секс" />
                            </SelectField>
                        </div>
                        <div className="column large-6">
                            <TextField
                                hintText=""
                                floatingLabelText="Укажите ваш возраст"
                                onChange={this.handleAgeChange}
                                fullWidth={true}
                                name="inputAge"
                            />
                        </div>
                        <div className="column large-12">
                            <div className="row">
                                <div className="column large-6">
                                    <AutoComplete
                                        hintText="Москва"
                                        floatingLabelText="Укажите ваш город"
                                        onUpdateInput={this.handleLocationChange}
                                        onNewRequest={this.handleLocationNewRequest}
                                        filter={AutoComplete.fuzzyFilter}
                                        openOnFocus={true}
                                        dataSource={cityList}
                                        fullWidth={true}
                                        name="inputLocation"
                                    />
                                </div>
                                <div className="column large-6">
                                    <TextField
                                        hintText="youmail@mail.ru"
                                        floatingLabelText="Укажите ваш E-mail"
                                        onChange={this.handleEmailChange}
                                        fullWidth={true}
                                        name="inputEmail"
                                    />
                                </div>
                                <div className="column large-12">
                                    <p style={{ lineHeight: '18px', fontSize: '14px', margin: '10px 0 15px 0'}}>Вы должны согласиться с <a href="#">пользовательским соглашением</a>, а также с передачей и обработкой своих данных, подтвердить своё совершеннолетие и ответственность за размещение объявления.</p>
                                    <Checkbox
                                        name="inputAgrement"
                                        label="Я согласен с правилами"
                                    />
                                </div>
                            </div>
                        </div> 
                        <input type="submit" value="submit btn" ref="submitBtn" style={{display: 'none'}} /> 
                    </form>
                </Dialog>
            </div>
        );
    }
})

export default DialogNewAd


