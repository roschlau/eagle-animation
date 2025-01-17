import { withTranslation } from 'react-i18next';

import Button from '../Button';
import IconBack from 'jsx:./assets/back.svg';
import IconDelete from 'jsx:./assets/delete.svg';
import IconExport from 'jsx:./assets/export.svg';
import IconSettings from 'jsx:./assets/settings.svg';
import * as style from './style.module.css';

const ActionsBar = ({ onAction = null, actions = [], position = "LEFT", t }) => {
    const handleAction = (action) => () => {
        if (onAction) {
            onAction(action);
        }
    }

    const tooltipPosition = position === 'LEFT' ? 'RIGHT' : 'LEFT';
    return (<div className={`${style.container} ${position === 'LEFT' ? style.left : position === 'RIGHT' ? style.right : ''}`}>
        {actions.includes('BACK') && <Button title={t('Back')} onClick={handleAction('BACK')} size="mini" icon={<IconBack />} tooltipPosition={tooltipPosition} />}
        {actions.includes('SETTINGS') && <Button title={t('Settings')} onClick={handleAction('SETTINGS')} size="mini" icon={<IconSettings />} tooltipPosition={tooltipPosition} />}
        {actions.includes('EXPORT') && <Button title={t('Export')} onClick={handleAction('EXPORT')} size="mini" icon={<IconExport />} tooltipPosition={tooltipPosition} />}
        {actions.includes('DELETE_PROJECT') && <Button title={t('Delete project')} onClick={handleAction('DELETE_PROJECT')} size="mini" icon={<IconDelete />} tooltipPosition={tooltipPosition} />}
    </div>);
}

export default withTranslation()(ActionsBar);
