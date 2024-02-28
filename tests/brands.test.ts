import { brands } from '@/data/brands';
describe('Hexadecimal Color Test', () => {
  const isValidHexColor = (color: string): boolean => {
    return /^#[0-9A-F]{6}$/i.test(color);
  };

  function testColors(colors: string[]): void {
    colors.forEach((color) => {
      it(`Validate hex color ${color}`, () => {
        expect(isValidHexColor(color)).toBe(true);
      });
    });
  }

  function traverseObject(obj: any): void {
    Object.values(obj).forEach((value) => {
      if (Array.isArray(value)) {
        testColors(value);
      } else if (typeof value === 'object' && value !== null) {
        traverseObject(value);
      }
    });
  }

  traverseObject(brands);
});
