module.exports = {
  name: 'underlying',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/underlying',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
