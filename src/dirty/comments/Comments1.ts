class Comments1 {
  init(): void {
    // get the port from env or use default
    const portAsString = process.env.port;
    const defaultPort = 8080;
    const port = portAsString == null ? defaultPort : parseInt(portAsString);

    // start server on given port
    console.log(port);
  }
}