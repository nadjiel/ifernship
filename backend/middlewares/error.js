export default function errorMiddleware(error, req, res, next) {
  console.error(error);

  if (res.statusCode < 400 || res.statusCode >= 600) {
    res.status(500);
  }

  return res.send(error);
}