module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["src/**/*.js", "!src/server.js"],
  coverageReporters: ["text", "lcov"],
  coverageThreshold: {
    global: { statements: 80, branches: 70, functions: 50, lines: 80 },
  },
};
