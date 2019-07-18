let baseUrl = '';
switch (process.env.NODE_ENV) {
  case 'test':
    baseUrl = 'http://59.110.153.57:9900/leniao-web';
    break;
  case 'development':
    baseUrl = 'http://59.110.153.57:9912/leniao-web';
    break;
  case 'production':
    baseUrl = 'https://leniao.kuaipeilian.com/leniao-web';
    break;
  default:
    baseUrl = '';
    break;
}
export default baseUrl