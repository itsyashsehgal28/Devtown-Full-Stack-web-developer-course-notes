/*
    ROUTING :
    
    Browser Router (parent router) ---> Routes of different types (user , books etc.) ---> Route (Specific route eg: getAllUsers)

    npm i react-router-dom
        "react-router-dom": "^6.17.0", ----> 6 is major update , 17 is minor update , 0 is the bug fixes for this version
    
    WORKFLOW : 
        index.js(Browser Router since its the parent) ---> app.js ----> components

        Browser Router will encapsulate all the routes hence it wil encapsulate app
    
    SYNTAX of routes and route declaration : 
        <Routes>
            <Route path='/' element={<ClassComponent/>}/>
                path is the route , element is the method name where we will find the function for it 

            <Route path='/FunctionalComponent' element={<FunctionalComponent 
                name={name} 
                author={author} 
                setName={setName} 
                age={20} />}/>

                    before ending the braces we write the props or the parameters of the function
        </Routes>
*/


/*
    LAYOUT : 
    
        in our website we have pages like : 
                /aboutUs   /signIn   /contactUs

        these are our components 
        
        but in all these pages what we have in common is : 
                footer      navbar      

        we will be making a seperate file for layouts so that theres no redundant data and build logics in that folder

        These are called Layouts its called HIGH ORDER COMPONENT or HOC

        HOCs can add additonal info/features to existing components

        now lets suppose in our BaseHoc we have ----> NAVBAR AND FOOTER LOGIC

        ab dekh ye logic baar baar likhne ki zarurat nhi h isko bs usmai encapsulate kardo

        we will encapsulate our pages with BaseHoc 

        we have our route like this ----> <Route path='/' element={<ClassComponent/>}/>

        SYNTAX => now it will be : <Route path='/' element={<BaseHoc><ClassComponent/></BaseHoc>}/>
*/