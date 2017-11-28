"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../lib");
describe("sample test", () => {
    const logger = lib_1.LabLogger.create("TEST", "info");
    it("should do something", () => {
        logger.info("this is a test");
    });
});
