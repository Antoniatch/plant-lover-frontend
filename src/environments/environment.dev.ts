import * as process from 'process';

export const environment = {
  production: false,
  api_url: process.env['API_URL'] || 'http://localhost:4000',
  name: 'development',
};
