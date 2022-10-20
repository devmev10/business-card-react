import React from 'react'
export default function Info(){
    return(
         <header>
            <img src="./images/profile.jpg" alt="My pic" />
            <h1>Ravi Tokas</h1>
            <h2>Full Stack Developer</h2>
            <h3>rTokas.com</h3>
            <div className="buttons">
                <button><a href='mailto:ravitokas90@gmail.com'>📧 Email</a></button>
                <button className = "linked"><a href='https://www.linkedin.com/in/ravitokas/'>LinkedIn</a></button>
            </div>
        </header>   
    )
}