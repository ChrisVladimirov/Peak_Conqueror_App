import {NavbarTemplate} from "./NavbarTemplate";

export const Header = (props) => {
    return (
        <div className="d-flex align-items-center h-100" style={{justifyContent: 'space-evenly'}}>
            <NavbarTemplate/>
            {/*<div className="text-center text-white fw-bold fs-2">
                Welcome to the App
                <em><span>Pesho</span></em>
                !
            </div>*/}
        </div>
    );
}