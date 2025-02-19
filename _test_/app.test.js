import {encodeCity} from '../src/client/js/app'
describe("encodeCity function", () => {
  test("should encode spaces correctly", () => {
    expect(encodeCity("Saudi Arabia")).toBe("Saudi%20Arabia");
  });

  test("should encode special characters", () => {
    expect(encodeCity("Château")).toBe("Ch%C3%A2teau");
    expect(encodeCity("São Paulo")).toBe("S%C3%A3o%20Paulo");
  });

  test("should return the same string if no encoding is needed", () => {
    expect(encodeCity("London")).toBe("London");
  });
});
