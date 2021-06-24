import { Utils } from "../app/Utils"

describe("Utils test suite", () => {
  beforeEach(() => {
    console.log("Before each hihi")
  })
  beforeAll(() => {
    console.log("Before All")
  })
  test("first test", () => {
    const result = Utils.toUpperCase("abc")

    expect(result).toBe("ABC")
  })

  test("parse simple URL", () => {
    const parsedUrl = Utils.parseURL("http://localhost:8080/login")

    expect(parsedUrl.href).toBe("http://localhost:8080/login")
    expect(parsedUrl.port).toBe("8080")
    expect(parsedUrl.protocol).toBe("http:")
    expect({ name: "sdf", age: 2 }).toEqual({ name: "sdf", age: 2 })
  })

  test("parse URL with query", () => {
    const parsedUrl = Utils.parseURL(
      "http://localhost:8080/login?user=user&password=pass"
    )
    const expectedQuery = {
      user: "user",
      password: "pass",
    }

    expect(parsedUrl.query).toEqual(expectedQuery)
  })

  test("test invalid URL", () => {
    function expectError() {
      Utils.parseURL("")
    }
    expect(expectError).toThrowError("Empty")
  })

  test("test invalid URL with arrow function", () => {
    expect(() => {
      Utils.parseURL("")
    }).toThrowError("Empty")
  })

  test.only("test invalid URL with try catch ", () => {
    try {
      Utils.parseURL("")
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty("message", "Empty url!")
    }
  })
})
