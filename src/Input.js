import React, { Component } from 'react';
import './Input.css';
import Display from './Display';

class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            iteams: '',
            city: '',
            isLoaded: false,
            temp: '87.2',
            name: 'Houston',
            error: '',
            country: ' US'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(evt){
        evt.preventDefault();
        // alert('inside submit');
        // console.log(this.state.city)
        let url = 'https://api.openweathermap.org/data/2.5/weather?q='
        let key = '&units=imperial&appid=0509a85eeb71ef944d4a6d16ac70b2bf'
            console.log(`${url}${this.state.city}${key}`);
            fetch(
                `${url}${this.state.city}${key}`
                // `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&appid=0509a85eeb71ef944d4a6d16ac70b2bf`
            )
            .then(res => res.json())
            .then(data => {
                console.log(data['main']['temp']);
                this.setState({
                    iteams: data,
                    isLoaded: true,
                    temp: data['main']['temp'],
                    name: data['name'],
                    country: data['sys']['country']
                })
                console.log(this.state.iteams);
            })
            .catch(err => {
                console.log(err.message);
                alert(`The city ${this.state.city} does not exist`);
            });     
            this.setState({
                city: ''
            })
        }
        async handleChange(evt){
        evt.preventDefault();
        await this.setState({
            city: evt.target.value
        })
        console.log(this.state.city);
        // this.handleSubmit();
    }
    render() {
        return (
            <React.Fragment classname='con'>
                <form classname='container' onSubmit={this.handleSubmit}>
                    <input
                        className='inputBox'
                        value={this.state.city}
                        onChange={this.handleChange}
                        name='city'
                        type='text'
                    />
                    <button >Get Weather</button>
                    <Display name={this.state.name} temp={this.state.temp} country={this.state.country}></Display>
                </form>
                
            </React.Fragment>
        )
    }
}
export default Weather;