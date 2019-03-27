module.exports = {
  name: 'some',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/some',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
