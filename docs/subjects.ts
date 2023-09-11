const getAllSubjects = {
  tags: ['Subjects'],
  description: 'Get all subjects',
  operationId: 'get subjects',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'Subjects found',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'number',
                  example: 1,
                },
                name: {
                  type: 'string',
                  example: 'Economy',
                },
              }
            },
          },
        },
      },
    },
    '401': {
      description: 'Unhautorized',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Unauthorized',
              },
              statusCode: {
                type: 'number',
                example: 401
              }
            },
          },
        },
      },
    },
  },
};

const getTokens = {
  tags: ['Auth'],
  description: 'Get Tokens',
  operationId: 'Get Tokens',
  responses: {
    '200': {
      description: 'Tokens',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              accessToken: {
                type: 'number',
                example: 'IUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFiaW8iLCJzdWIiOiJvd25lciIsImlhdCI6MTY5NDQwOTQyNCwiZXhwIjoxNjk0NjI1NDI0fQ.FDurYiEcLslATsNmOuJvtg4E40w3wO0iVbn5rvJtvhE",',
              },
              refreshToken: {
                type: 'string',
                example: 'IUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFiaW8iLCJzdWIiOiJvd25lciIsImlhdCI6MTY5NDQwOTQyNCwiZXhwIjoxNjk0NjI1NDI0fQ.FDurYiEcLslATsNmOuJvtg4E40w3wO0iVbn5rvJtvhE",',
              },
            }
          },
        },
      },
    },
    '500': {
      description: 'Unhautorized',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Internal Server Error',
              },
              statusCode: {
                type: 'number',
                example: 500
              }
            },
          },
        },
      },
    },
  },

}

export { getAllSubjects, getTokens };