import c from './header.module.css';
import UsersInfo from './users_info/UsersInfo';
import Theme from '../theme/Theme';

function Header (){
    return (
        <header>
            <UsersInfo />

            <Theme />
        </header>
    );
};

export default Header;