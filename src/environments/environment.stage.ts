import * as process from 'process';

export const environment = {
  production: true,
  api_url: process.env['API_URL'] || 'http://localhost:4001',
  name: 'staging',
};
