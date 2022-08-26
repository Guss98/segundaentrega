import React, {useState} from 'react'
import {Link, Outlet} from 'react-router-dom';
import {FiAlertCircle} from 'react-icons/fi';
import {MdDoneOutline} from 'react-icons/md'
import './NavBarStyles.css'
import {CgPokemon} from 'react-icons/cg'

export const NavBar = () => {
    
  return (
    <div className='sum'>
        <nav className='navBar'>
            <ul className='ListaDesordenada'>
                <li>
                    <Link to = '/home'>Home</Link>
                </li>
                <li>
                    <Link to = '/List'>To-Do List</Link> 
                    <FiAlertCircle className='undone'/>
                    <MdDoneOutline className='done'/>
                </li>
                <li>
                    <Link to = '/Pokedex'>Pokedex</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

