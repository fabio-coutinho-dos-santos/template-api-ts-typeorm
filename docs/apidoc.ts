import { createUser, createUserBody, deleteUser } from "./users";
import { getAllSubjects, getTokens } from './subjects'

const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'My REST API - Documentation',
    description: 'Description of my API here',
    termsOfService: 'https://mysite.com/terms',
    contact: {
      name: 'Developer name',
      email: 'dev@example.com',
      url: 'https://devwebsite.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000/',
      description: 'Local Server',
    },
    {
      url: 'https://api.mysite.com',
      description: 'Production Server',
    },
  ],
  tags: [
    {
      name: 'Roles',
    },
    {
      name: 'Users',
    },
    {
      name: 'Subjects'
    },
    {
      name: 'Auth'
    }
  ],

  paths: {
    users: {
      post: createUser,
    },
    '/users/{id}': {
      delete: deleteUser,
    },
    '/subjects': {
      get: getAllSubjects
    },
    '/token': {
      get: getTokens
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      createUserBody,
    },
  },
};

export { apiDocumentation };