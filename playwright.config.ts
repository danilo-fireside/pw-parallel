import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const seconds = 1000;
process.env.SESSIONS = process.env.SESSIONS ? process.env.SESSIONS : '10';

const config: PlaywrightTestConfig = {
  testDir: '.',
  timeout: 120 * seconds,
  fullyParallel: true,
  workers: +process.env.SESSIONS,
  reporter: 'list',
  use: {
    headless: true,
    httpCredentials: {
      username: 'user',
      password: `2mspir9028rj`
    },
    actionTimeout: 60 * seconds,
    navigationTimeout: 60 * seconds,
    baseURL: 'http://qa.firesidechat.com',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    }
  ],
};
export default config;
