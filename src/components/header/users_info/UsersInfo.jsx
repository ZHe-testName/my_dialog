import c from './users_info.module.css';

function UsersInfo (){
    return (
        <div className={c.userInfo}>
            <div className={c.name}>
                Zhekanchik
            </div>

            <div className={c.status}>
                Online
                <span className={c.circle}></span>
            </div>
        </div>
    );
};

export default UsersInfo;