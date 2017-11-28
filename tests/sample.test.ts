import {LabLogger} from "../lib"
import {} from "jest"

describe("sample test", () => {

  const logger = LabLogger.create("TEST", "info")

  it("should do something", () => {
    logger.info("this is a test")
  })

})