export class UuidGeneratorNaiveRandomImpl implements UuidGenerator {
  private static readonly RANDOM = Math;

  create(): string {
    let sb = "";
    for (let i = 0; i < 32; i++) {
      sb += this.createOne();
    }
    return sb;
  }

  createOne(): string {
    return Math.floor(UuidGeneratorNaiveRandomImpl.RANDOM.random() * 15).toString(16);
  }
}