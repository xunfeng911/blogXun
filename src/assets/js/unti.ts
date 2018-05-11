export function myBrowser() {
  const userAgent = navigator.userAgent;
  const isOpera = userAgent.indexOf('Opera') > -1;
  if (isOpera) {
    return 'Opera';
  }
  if (userAgent.indexOf('Firefox') > -1) {
    return 'Firefox';
  }
  if (userAgent.indexOf('Chrome') > -1) {
    return 'Chrome';
  }
  if (userAgent.indexOf('Safari') > -1) {
    return 'Safari';
  }
  if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera) {
    return 'IE';
  }
}

export function myPhone() {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf('iPhone') > -1) {
    return 'iPhone';
  }
}
