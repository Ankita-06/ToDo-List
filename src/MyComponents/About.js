import React from 'react'

export const About = () => {
    let aboutStyle={
        minHeight: "70vh",
        margin: "40px 8%",
    }
    return (
        <div className = "container my-3" style={aboutStyle}>
            <h2 className= "text-center my-3">About</h2>
            <p><b> It’s a list of tasks you need to complete, or things that you want to do. </b></p>
            <p>Most typically, they’re organised in order of priority. Traditionally, they’re written on a piece of paper or post it notes and acts as a memory aid. As technology has evolved we have been able to create a todo lists with excel spreadsheets, word documents, email lists, todo list apps, microsoft to do and google to do list to name a few. You can use a to do list in your home and personal life, or in the workplace.</p>
            <p>Having a list of everything you need to do written down in one place means you shouldn’t forget anything important. By prioritising the tasks in the list you plan the order in which you’re going to do them and can quickly see what needs your immediate attention and what tasks you can leave until a little later.</p>
        </div>
    )
}
