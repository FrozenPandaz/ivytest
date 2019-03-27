module.exports = {
  name: "ivytest",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/ivytest/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
