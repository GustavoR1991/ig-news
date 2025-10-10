import { NextApiRequest, NextApiResponse } from "next";

// JWT (storage)
// Next Auth(social)
//Cognito, Auth0

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" }
  ]
  return response.json(users)
}

// serverLess