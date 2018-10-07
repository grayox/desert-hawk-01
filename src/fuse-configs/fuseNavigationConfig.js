// import {MaterialUINavigation} from 'main/content/components/material-ui/MaterialUINavigation';
// import {authRoles} from 'auth/auth';

export const fuseNavigationConfig = [
  {
    'id'   : 'dashboard',
    'title': 'Dashboard',
    'type' : 'item',
    'icon' : 'dashboard',
    'url'  : '/dashboard'
  },
  {
    'id'   : 'inbox',
    'title': 'Inbox',
    'type' : 'item',
    'icon' : 'cloud_download',
    // 'url'  : '/apps/calendar'
    'url'  : '/inbox'
  },
  {
    'id'   : 'archive',
    'title': 'Archive',
    'type' : 'item',
    'icon' : 'save',
    // 'url'  : '/apps/todo'
    'url'  : '/archive'
  },
  {
    'id'   : 'outbox',
    'title': 'Outbox',
    'type' : 'item',
    'icon' : 'cloud_upload',
    // 'url'  : '/getting-started/routing'
    'url'  : '/outbox'
  },
  {
    'id'   : 'contacts',
    'title': 'Contacts',
    'type' : 'item',
    'icon' : 'contacts',
    // 'url'  : '/apps/contacts/all'
    'url'  : '/contacts'
  },
  {
    'id'   : 'feedback',
    'title': 'Feedback',
    'type' : 'item',
    'icon' : 'feedback',
    'url'  : '/feedback'
  },
  {
    'id'   : 'settings',
    'title': 'Settings',
    'type' : 'item',
    'icon' : 'settings',
    // 'url'  : '/getting-started/settings'
    'url'  : '/settings'
  }
];