// mocks/server.js
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Setup a server with the provided request handlers.
export const server = setupServer(...handlers);
