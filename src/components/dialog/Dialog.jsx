import { normalizeDialog } from '../../helpers';
import data from '../../data';
import c from './dialog.module.css';
import MessageItem from './message_item/MessageItem';

function Dialogs (){
    const normalizedDialog = normalizeDialog(data);

    return (
        <div className={c.dialog}>
            <div className={c.overflow}>
                {
                    normalizedDialog.map(item => <MessageItem {...item} key={item.id}/>)
                }
            </div>
        </div>
    );
};

export default Dialogs;