import React, { Component } from 'react'
import Item from './Item';

export default class Header extends Component {

    render() {
        return (
            <div className='continer'>
                <div className='carousel'>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className=" px-lg-5">
                                <h2 className='navbarbrand'>
                                    Try Glasses app online
                                </h2>
                            </div>
                        </nav>
                    </div>
                <div>
                    <Item />
                </div>
                </div>
            </div>




        );
    }
}