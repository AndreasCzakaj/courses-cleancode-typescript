function getPort(): number {
  const portAsString = process.env.port;
  if (portAsString == null) {
    return 8080;
  }
  try {
    return parseInt(portAsString);
  } catch (e) {
    return 8080;
  }
}