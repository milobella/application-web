export class Device {
  public state: Map<string, any> = new Map<string, string>();
}

export class MilobellaRequest {
  public text: string;
  public device: Device = new Device();

  constructor(
    text: string,
    timezone?: string,
  ) {
    this.text = text;

    if (timezone) {
      this.device.state.set('timezone', timezone);
    }
  }
}
