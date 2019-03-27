module.exports = {
  name: 'transitive',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/transitive',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
