// Pop Notification

export const popNotificationInfo = (data) => ({
  type: 'POP_NOTIFICATION_INFO',
  data
});

export const popNotificationSuccess = (data) => ({
  type: 'POP_NOTIFICATION_SUCCESS',
  data
});

export const popNotificationWarning = (data) => ({
  type: 'POP_NOTIFICATION_WARNING',
  data
});

export const popNotificationDanger = (data) => ({
  type: 'POP_NOTIFICATION_DANGER',
  data
});

export default {
  popNotificationInfo: popNotificationInfo,
  popNotificationSuccess: popNotificationSuccess,
  popNotificationWarning: popNotificationWarning,
  popNotificationDanger: popNotificationDanger
}