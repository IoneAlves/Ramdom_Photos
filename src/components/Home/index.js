import React from 'react';
import './style.css';
import { useRef } from 'react';

function Home () {
    const inputElement = useRef();

    function returnValue(){
        console.log(inputElement.current.value);
    }

    // fetch("https://api.unsplash.com/search/photos?query=coffee")
    //     .then(promiseResults => promiseResults.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))

    return (
        <div>
            <div className="container">
                <h1>Random Images</h1>
                <p>See the most beautiful images to help increse a good mood of your day</p>
                <p>Click on your favorite category</p>
                <div className="btnSearch">
                    <input ref={inputElement} type="button" value="Nature" id="nature" onClick={returnValue}></input>
                    <input ref={inputElement} type="button" value="Houses" id="houses" onClick={returnValue}></input>
                    <input ref={inputElement} type="button" value="Travel" id="travel" onClick={returnValue}></input>
                    <input ref={inputElement} type="button" value="Architecture" id="architecture" onClick={returnValue}></input>
                    <input ref={inputElement} type="button" value="Film" id="film" onClick={returnValue}></input>
                    <input ref={inputElement} type="button" value="Arts" id="arts" onClick={returnValue}></input>
                </div>
                <div className="framePictures">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat eum illo ea dolores a, blanditiis libero eligendi consequatur, culpa iure commodi aliquam ipsum asperiores ipsa debitis facere sunt pariatur quam.</div>
            </div>
        </div>
    );
};

export default Home;