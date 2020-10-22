import React from 'react'
function Home(){
    return (
        <div className="home">
            <div className="radio">
                {process.env.HOST}
                <blockquote>Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.</blockquote>
                <img src="/img/1.jpeg" width="100%" />
                <img src="/img/2.jpg" width="100%" />
                <img src="/img/3.jpg" width="100%" />
            </div>
        </div>
    );

}



export default Home;