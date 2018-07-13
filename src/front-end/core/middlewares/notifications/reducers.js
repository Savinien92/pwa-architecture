import Noty from 'noty'
import 'noty/lib/noty.css'
// import 'noty/lib/themes/nest.css'
import 'noty/lib/themes/metroui.css'

const notificationMiddleware = {
  middleware: () => (next) => (action) => {
    let notif = action.data
    let config = {
      theme: 'metroui',
      layout: 'topRight'
    }
    switch(action.type){
      case 'POP_NOTIFICATION_INFO':
        new Noty({
          theme: config.theme,
          type: 'info',
          layout: config.layout,
          text: `${notif.message}`,
          timeout: 2000
        }).show();
        break;
      case 'POP_NOTIFICATION_SUCCESS':
        new Noty({
          theme: config.theme,
          type: 'success',
          layout: config.layout,
          text: notif.message,
          timeout: 2000
        }).show();
        break;
      case 'POP_NOTIFICATION_WARNING':
        new Noty({
          theme: config.theme,
          type: 'warning',
          layout: config.layout,
          text: notif.message
        }).show();
        break;
      case 'POP_NOTIFICATION_DANGER':
        new Noty({
          theme: config.theme,
          type: 'error',
          layout: config.layout,
          text: notif.message
        }).show();
        break;
      default: break;
    }
    return next(action);
  }
}

export default notificationMiddleware;