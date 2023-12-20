import React from 'react' ;

const BaseHoc = (component) => ({...props}) =>{
    return(
        <div>
            <h2>lets suppose this is navbar</h2>
            <component {...props}/>
            <h2>and then this is our footer which is also redundant code </h2>
        </div>
    )
};

export default BaseHoc ;

// this is made like the functional component and will be imported where all components/PAGES lie which is app.js (parent of pages) 