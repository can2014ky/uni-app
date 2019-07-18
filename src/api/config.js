let baseURL = '';
switch (process.env.NODE_ENV) {
  case 'test':
    baseURL = 'http://59.110.153.57:9900/leniao-web';
    break;
  case 'development':
    baseURL = 'http://59.110.153.57:9912/leniao-web';
    break;
  case 'production':
    baseURL = 'https://leniao.kuaipeilian.com/leniao-web';
    break;
  default:
    baseURL = '';
    break;
}
export default baseURL