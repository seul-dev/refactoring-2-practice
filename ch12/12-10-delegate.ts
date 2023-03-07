class Printer {
  private printerHeader: PrinterHeader;
  constructor(printerHeader?: PrinterHeader) {
    this.printerHeader = printerHeader
      ? printerHeader
      : new DefaultPrinterHeader();
  }

  print(data: string) {
    this.printerHeader.print(data);
  }
}

interface PrinterHeader {
  print(data: string): void;
}

class DefaultPrinterHeader implements PrinterHeader {
  print(data: string) {
    console.log(data);
  }
}

class RedPrinterHeader implements PrinterHeader {
  print(data: string) {
    console.log(`🔴 ${data}`);
  }
}

class BluePrinterHeader implements PrinterHeader {
  print(data: string) {
    console.log(`🔵 ${data}`);
  }
}
