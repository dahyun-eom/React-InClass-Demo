import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

// Slide 35
function BoilingVerdict2(props) {
    if (props.celsius >= 100) {
        return <p>The water is boiling.</p>;
    }
    return <p>The water is not boiling.</p>;
}

function InputBox2(props) {
    return (
        <fieldset>
            <legend>Enter the temperature in Celsius:</legend>
            <input
                value={props.temp}
                onChange={props.onChange}
            />
        </fieldset>
    );
}

// Slide 36
function Calculator1_2(props) {
    const [temperature, setTemperature] = useState("");
    
    function handleChange(e) {
        setTemperature(e.target.value);
    }
    
    return (
        <div>
            <InputBox2
                temp={temperature}
                onChange={handleChange}
            />
            <BoilingVerdict2 celsius={parseFloat(temperature)} />
        </div>
    );
}

// Slide 38
function toCelsius2(t) {
    return ((t - 32) * 5) / 9;
}

function toFahrenheit2(t) {
    return ((t * 9) / 5) + 32;
}

function CelsiusTemp2(props) {
    return (
        <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input
                value={props.temperature}
                onChange={
                    function (e) {
                        props.onTemperatureChange(e.target.value, 'C')
                    }
                }
            />
        </fieldset>
    );
}


function FahrenheitTemp2(props) {
    return (
        <fieldset>
            <legend>Enter temperature in Fahrenheit:</legend>
            <input
                value={props.temperature}
                onChange={
                    function (e) {
                        props.onTemperatureChange(e.target.value, 'F')
                    }
                }
            />
        </fieldset>
    );
}

function Calculator2_2(props) {
    const [unit, setUnit] = useState('C');
    const [temperature, setTemperature] = useState(0.0);
    const celsius = unit === 'F' ? toCelsius2(temperature) : temperature;
    const fahrenheit = unit === 'C' ? toFahrenheit2(temperature) : temperature;
    
    function handleTempChange(t, u) {
        setTemperature(t);
        setUnit(u);
    }
    
    return (
            <div className="Calculator2div">
              <CelsiusTemp2
                temperature={celsius}
                onTemperatureChange={handleTempChange}
              />
              <FahrenheitTemp2
                temperature={fahrenheit}
                onTemperatureChange={handleTempChange}
              />
              <BoilingVerdict2
                celsius={parseFloat(celsius)}
              />
            </div>
        );
}


export {Calculator1_2, Calculator2_2};

