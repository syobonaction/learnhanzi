import * as React from 'react';
import Nav from './Nav';
import { Navlink } from '../types/types';
import './App.css';

const App = () => {
    const links: Navlink[] = [
        {
            name: 'home',
            url: '',
            id: '0'
        },
        {
            name: 'study',
            url: '',
            id: '1'
        },
        {
            name: 'stats',
            url: '',
            id: '2'
        },
        {
            name: 'account',
            url: '',
            id: '3'
        },
    ];

    return(
        <header>
            <Nav 
                links={ links }
            />
        </header>
    );
}

export default App;