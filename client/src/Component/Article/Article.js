import React from 'react';

const Article = ({title, url, _id, date, handleClick, buttonText, saved }) => (
    <div className= "card-body box-body d-inline-flex flex-row justify-content-between ">
        
            <div className="card-title">{title}</div>
            <div>
                <button className = "btn btn-primary" onClick= {() => handleClick(_id)}>
                {buttonText}
                </button>
            </div>
        
    </div>
); 

export default Article;