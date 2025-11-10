import NavLinks from "./NavLinks";

export function NavBar(){
    return(
    <header>
        <div className="main-heading-container">
            <div>
                <i className="fa-solid fa-robot blue-icon"></i>
            </div>
            <h1 className="main-heading">Necho TaskManager</h1>
            <NavLinks></NavLinks>
        </div>
    </header>
    );
}