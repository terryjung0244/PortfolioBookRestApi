import { apiBaseAddress } from './localHostAddress';

export const callFetch = async (
  endPoint: string,
  method: string,
  body: any,
) => {
  return await fetch(apiBaseAddress() + endPoint, {
    method,
    body: body ? JSON.stringify(body) : null, //body가 존재하면, Json.stringigy(body) 하고, 없으면 null
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response: Response) => response.json())
    .catch((err: Error) => alert(err.message));
};
