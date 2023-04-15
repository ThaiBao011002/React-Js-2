import React, { Component } from 'react'

export default class Item extends Component {

    Glasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ];
    state = {
        StyleGlasses: {
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    };


    render() {
        return (
            <div className=''>
                <div class="row justify-content-center align-items-center g-2">
                    <div class="model col">
                        <img className='model'
                            alt=""
                            src={`/img/model.jpg `}
                            style={{
                                width: '50%',
                            }}
                        />
                        <img className='glasses' src={`/img/${this.state.url}.png`} alt="" />
                        <div className='infor'>
                            <p className='textname'>{this.state.name}</p>
                            <p className='text'>{this.state.desc}</p>
                        </div>

                    </div>
                    <div class="col">
                        <img
                            alt='...'
                            src={`/img/model.jpg`}
                            style={{
                                width: '50%',
                            }}
                        />
                    </div>
                </div>
                {/* item glasses                 */}
                <div className='bor'>
                    <div className='rowitem p-5'>

                        <div className='item'>

                            <img className='imgg'
                                onClick={() => {
                                    this.setState({
                                        url: 'v1',
                                        name: "GUCCI G8850U",
                                        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                                    })

                                }}
                                src="./img/g1.jpg"
                                alt='...'
                                style={{
                                    height: '100px',
                                }}

                            />
                            <img className='imgg'
                                onClick={() => {
                                    this.setState({
                                        url: 'v2',
                                        name: "GUCCI G8759H",
                                        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "

                                    });
                                }}
                                src="./img/g2.jpg"
                                alt='...'
                                style={{
                                    height: '100px',
                                }}

                            />
                            <img className='imgg'
                                onClick={() => {
                                    this.setState({
                                        url: 'v3',
                                        name: "DIOR D6700HQ",
                                        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "

                                    });
                                }}
                                src="./img/g3.jpg"
                                alt='...'

                            />
                            <img className='imgg'
                                onClick={() => {
                                    this.setState({
                                        url: 'v4',
                                        name: "DIOR D6005U",
                                        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "

                                    });
                                }}
                                src="./img/g4.jpg"
                                alt='...'

                            />
                            <img className='imgg'
                                onClick={() => {
                                    this.setState({
                                        url: 'v5',
                                        name: "PRADA P8750",
                                        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "

                                    });
                                }}
                                src="./img/g5.jpg"
                                alt='...'

                            />
                            <img className='imgg'
                                onClick={() => {
                                    this.setState({
                                        url: 'v6',
                                        name: "PRADA P9700",
                                        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "

                                    });
                                }}
                                src="./img/g6.jpg"
                                alt='...'

                            />
                            <img className='imgg'
                                onClick={() => {
                                    this.setState({
                                        url: 'v7',
                                        name: "FENDI F8750",
                                        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "

                                    });
                                }}
                                src="./img/g7.jpg"
                                alt='...'
                                style={{
                                    height: '100px',
                                }}

                            />
                            <img className='imgg'
                                onClick={() => {
                                    this.setState({
                                        url: 'v8',
                                        name: "FENDI F8500",
                                        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "

                                    });
                                }}
                                src="./img/g8.jpg"
                                alt='...'

                            />
                            <img className='imgg'
                                onClick={() => {
                                    this.setState({
                                        url: 'v9',
                                        name: "FENDI F4300",
                                        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "

                                    });
                                }}
                                src="./img/g9.jpg"
                                alt='...'

                            />
                        </div>
                    </div>
                </div>

            </div>

        );
    }



}
