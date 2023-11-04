import { response } from "express";

const base = (message: string, status = 400) => {
  return response.json({
    message,
    status,
  });
};

const server = () => {
  return response.json({
    message: "Internal server error",
    status: 500,
  })
}

const request = (errors: Error) => {
  return response.json({
    errors,
    message: "Invalid request",
    status:  400,
  })
}

const authorization = () => {
  response.json({
    message: "You are not authenticated",
    status: 401,
  })
}

const unauthorized = () => {
  response.json({
    message: "You do not have permission to run this service.",
    status: 403,
  })
}

export default {
  base,
  server,
  request,
  authorization,
  unauthorized,
}