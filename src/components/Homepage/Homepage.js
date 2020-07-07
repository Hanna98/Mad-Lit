import React, { Component } from 'react';
import home from './Homepage.module.css';
import Navigation from '../Navigation/Navigation.js';
import Cards from '../Cards/Cards.js'
import { Link } from 'react-router-dom';

class Homepage extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <div className={home.absoluteContainer}>

                    <div className={home.leftSidebar}>
                        broom broomcsndkcjfnsdkvjsdkjv skdjv ksdj vksdj vks dvkjs
                        sdvnm sdkvj sdkvj sdkv ksdj vkjsd vkjsdsdvjsdvnksj
                        pppppppppppppppppppp
                    </div>
                    
                    <div className={home.container}>


                        <header className={home.header}>dskjfhsdjfh</header>


                        <div className={home.outerGridContainer}>
                            <div className={home.gridContainer}>
                                <Cards />

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
};




export default Homepage;