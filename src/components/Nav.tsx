import * as React from 'react';
import { Navlink } from '../types/types';
import './Nav.css';

interface NavProps {
    links: Array<Navlink>
}

const Nav = ({links}:NavProps) => {
    return(
        <div>
            <ul>
                { links.map((link: Navlink) => {
                    return(
                        <li key={ link.id }>
                            <a href={ link.url }>{ link.name }</a>
                        </li>
                    )
                }) }
            </ul>
        </div>
    );
}

export default Nav;