import React, { Component } from "react";
import Home from "./home";
import { useTranslation, Trans } from "react-i18next";




export default class Landing extends Component {

    state = {
        languageOptions: [
            {key: 'en', language: 'english', orientation: 'left'},
            {key: 'ar', language: 'عربى', orientation: 'right'},
            {key: 'pt', language: 'português', orientation: 'left'},
            {key: 'uk', language: 'yкраїнська', orientation: 'right'},
        ],
        selectedLanguage: "en"
    }

  

    languageChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        
        this.setState({[name]: value});

         console.log(this.state)
        // useTranslation.i18n.languageChange('pt')
        // const { t, i18n } = useTranslation();
        
        // i18n.changeLanguage(event.target.value);
        // console.log("change", event.target.value)
    }

    render () {
        return(
            <Home state={this.state} languageChange={this.languageChange}/>
        )
    }
}