import {combineReducers} from 'redux';
import fuse from './fuse';
import auth from 'auth/store/reducers/index';
import quickPanel from 'main/quickPanel/store/reducers';
import chatPanel from 'main/chatPanel/store/reducers';
import analyticsDashboardApp from 'main/content/apps/dashboards/analytics/store/reducers/index';
import mailApp from 'main/content/apps/mail/store/reducers/index';
import todoApp from 'main/content/apps/todo/store/reducers/index';
import fileManagerApp from 'main/content/apps/file-manager/store/reducers/index';
import contactsApp from 'main/content/apps/contacts/store/reducers/index';
import calendarApp from 'main/content/apps/calendar/store/reducers/index';

import leads from 'my-app/store/reducers/my-reducer/leadsReducer';

const rootReducer = combineReducers({
    leads,
    auth,
    fuse,
    analyticsDashboardApp,
    mailApp,
    todoApp,
    fileManagerApp,
    contactsApp,
    calendarApp,
    quickPanel,
    chatPanel
});

export default rootReducer;