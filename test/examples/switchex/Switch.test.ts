import { describe, it, expect, beforeEach } from 'vitest';
import {Switch} from "@src/examples/switchex/Switch";

describe('SwitchTest', () => {
  let sut: Switch;

  beforeEach(() => {
    sut = new Switch();
  });

  it.each([
    ["", "Aquaman"],
    ["unknown", "Aquaman"],
    ["wind", "Storm"],
    ["laser", "Cyclops"]
  ])('should yield %s for input %s', (power: string, expected: string) => {
    expect(sut.getHero(power)).toEqual(expected);
  });

});