import jsonWebToken from "jsonwebtoken";

export function verifyTokenAuthentication(request, response, next) {
  const authorization = request.headers.authorization;

  if (!authorization) {
    return response.status(403).json("Token faltando.");
  }

  const token = authorization.split(" ")[1];

  try {
    const { sub, name } = jsonWebToken.verify(token, process.env.KEY_TOKEN);

    request.user = {
      id: Number(sub),
      name,
    };

    return next();
  } catch (error) {
    return response.status(403).json("Token inválido.");
  }
}
