import { describe, it, expect } from 'vitest';
import {DtaRcrd10} from "@src/dirty/naming/DtaRcrd10"

describe('DtaRcrd10Test', () => {

  it('DtaRcrd10', () => {
    const dataRecord = new DtaRcrd10();
    dataRecord.serverProt = "12345";

    expect(dataRecord.serverProt).toEqual("12345");
  });

});