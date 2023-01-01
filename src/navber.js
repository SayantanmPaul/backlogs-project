import './App.css';


function navber(){
    return(
        <div className="wrapper">
            <div className="content">
                <div className="logocontainer">
                    <image className="logo" src='./Images/Group 1.svg' height={30} width={200}/>
                </div>
                <div className="bannernav">
                    <div>Codes</div>
                    <div>Blogs</div>
                    <div>Sign in</div>
                    <button  className="accentedbutton">Get Started </button>
                </div>
            </div>
        </div>
        
    )
}
export default navber