import React, { Component } from 'react'

function Api(){
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='
        let key = '&units=imperial&appid=0509a85eeb71ef944d4a6d16ac70b2bf'
            console.log(`${url}${this.state.city}${key}`);
            fetch(
                `${url}${this.state.city}${key}`
            )
            .then(res => res.json())
            .then(data => {
                this.setState({
                    iteams: data,
                    isLoaded: true
                })
                console.log(this.state.iteams);
            })     
}

export default Api;