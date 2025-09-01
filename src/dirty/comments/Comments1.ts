class Comments1 {
  constructor(private app: any) {}

  init(): void {
    // get the port from env or use default
    const portAsString = process.env.port;
    const defaultPort = 8080;
    const port = portAsString == null ? defaultPort : parseInt(portAsString);

    // start server on given port
    this.app.listen(port, () => {})
  }
}