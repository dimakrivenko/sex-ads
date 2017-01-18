import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple600} from 'material-ui/styles/colors';
import {purple800} from 'material-ui/styles/colors';
import {purpleA200} from 'material-ui/styles/colors';
import {grey400} from 'material-ui/styles/colors';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { createAd, loadAds } from '../actions/AdsActions'
import { openDialogCreateItem, closeAllDialog } from '../actions/DialogsActions'

import Header from '../components/Header.jsx';
import NoteEditor from '../components/NoteEditor.jsx';
import Footer from '../components/Footer.jsx';
import DialogNewAd from '../components/DialogNewAd.jsx';



const sexAdsTheme = getMuiTheme({
    palette: {
        primary1Color: purple600,
        primary2Color: purple800,
        pickerHeaderColor: purple600,
        accent1Color: purpleA200,
        borderColor: grey400,
    }
});

class App extends Component {
    
    // Открыть модаль - Добавить объявление
    handleOpenDialog_CreateItem () {
        this.props.openDialogCreateItem()
    }

    // Закрытие модалей
    closeAllDialog () {
        console.log('close dialog in app')
        this.props.closeAllDialog()
    }

    // Добавить новое объявление
    handleAdAdd(adData) {
        this.props.createAd(adData)
    }

    // Активная категория
    handleActiveCategory(caterogy) {
        this.props.loadAds(caterogy)
    }


    

    
    render() {
        
        const { dialogStateOpen } = this.props.modals.modalShowList.modalCreateItem
        return (
            <MuiThemeProvider muiTheme={sexAdsTheme}>
                <div className='wrapper-body'>
                    <Header activeCategory={this.handleActiveCategory.bind(this)} onOpenDialogNewAd={this.handleOpenDialog_CreateItem.bind(this)} />
                    <div className='l-main'>
                        <div className='l-page-content'>

                            {this.props.children}
                            
                        </div>
                    </div>
                    <Footer />
                    <DialogNewAd closeAction={this.closeAllDialog.bind(this)} dialogState={this.props.modals.modalShowList.modalCreateItem} modalToggle={this.handleOpenDialog_CreateItem} onAdAdd={this.handleAdAdd.bind(this)} />
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps (state) {
    return {
        modals: state.modals
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadAds: bindActionCreators(loadAds, dispatch),
        createAd: bindActionCreators(createAd, dispatch),
        openDialogCreateItem: bindActionCreators(openDialogCreateItem, dispatch),
        closeAllDialog: bindActionCreators(closeAllDialog, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

