import React, { componets } from "react";
import './App.css'




export default class AppClass extends React.Component{
   
    render() {
        const img = this.props.prop
        console.log(img)
        return (
            <div>
                <h1>Kalvium Gallery</h1>
                <div id='flex'>
                    {
                        img.map((item) => {
                            return <img src={item.img}/>
                        })
                    }

                </div>               
            </div>
        )}
}

