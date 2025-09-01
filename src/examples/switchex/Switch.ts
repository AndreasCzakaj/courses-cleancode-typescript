export class Switch {
  powerToHeroMap: Record<string, string> = {
    "wind": "Storm",
    "laser": "Cyclops",
    "DEFAULT": "Aquaman"
  };

  getHero(power: string): string {
    return this.powerToHeroMap[power] ?? this.powerToHeroMap["DEFAULT"];
  }
}