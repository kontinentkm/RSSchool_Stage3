// mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://jsonplaceholder.typicode.com/posts/:id',
    (req, res, ctx) => {
      const { id } = req.params;
      return res(
        ctx.json({
          id,
          title: `Test Post ${id}`,
          body: `This is a test post body for post ${id}.`,
        })
      );
    }
  ),
];
