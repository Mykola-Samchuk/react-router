import React from "react";

const Publication=({author,content,image,date})=>{
    const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
    const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
    return(
        <div className = "component">
            <p className="public">Publication</p>
            <div className = "all-content">
                <div className = "head">
                    <div className = "avatar">
                        <img className="photo" src = {ANAKIN_IMAGE} />
                    </div>
    
                    <ul className = "name-content">
                        <li>
                            <a className="public-link" href="#">{author.name}</a>
                        </li>
                        <li>
                            <a className="public-link"  href="#">{author.nickname}</a>
                        </li>
                        <li>
                            <a className="public-link"  href="#">{date}</a>
                        </li>
                    </ul>
                </div>
    
                <div className = "img-content">
                    <div className = "post">
                        <p>
                            <a className="public-link"  href="#">{content}</a>
                        </p>
                    </div>
    
                    <div className = "img">
                        <a className="public-link" >
                            <img className="img-post" src = {RAY_IMAGE}/>
                        </a>
                    </div>
                </div>
    
            </div>
           
        </div>
        )
}
export default Publication