import {NavbarTemplate} from "./NavbarTemplate";

export const Header = (props) => {
    return (
        <div className="d-flex align-items-center h-100" style={{justifyContent: 'space-evenly'}}>
            <NavbarTemplate/>
        </div>
    );
}