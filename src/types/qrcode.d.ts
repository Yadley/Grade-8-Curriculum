declare module "qrcode" {
  interface QRCodeRenderOptions {
    margin?: number;
    width?: number;
    color?: { dark?: string; light?: string };
    type?: "svg" | "utf8" | "terminal";
  }

  const QRCode: {
    toCanvas(
      canvas: HTMLCanvasElement,
      text: string,
      options?: QRCodeRenderOptions,
    ): Promise<void>;
    toString(text: string, options?: QRCodeRenderOptions): Promise<string>;
  };

  export default QRCode;
}
