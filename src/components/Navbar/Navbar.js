import React, { Component } from 'react'
import {MenueItems} from "./MenuItems"
class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React</h1>
                <div className="menue-icon">
                    
                </div>
                <ul>
                    {MenueItems.map((item, Index)=>{
return(
    <li key={index}>
    <a className={item.cName} href={item.url}>
{item.title}
    
    </a>
    </li>
)

                    })}

                    
                </ul>
            </nav>
        )
    }
}
export default Navbar