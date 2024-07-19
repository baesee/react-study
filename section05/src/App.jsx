import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';
import { useState } from 'react';
import Bulb from './components/Bulb';
import Count from './components/Counter';
import Register from './components/Register';
import HookExam from './components/HookExam';

function App() {
    return (
        <>
            <HookExam />
            {/* <Register /> */}
            {/* <Bulb />
            <Count /> */}
        </>
    );
}

export default App;
