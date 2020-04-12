require('./extraPlugin/workshop-add-flex');

exports.config = {
  projectRoot: "./src",
  projectName: "ng-girls-page",
  outDir: './dist/static',
  routes: {
    '/workshops/:workshopId': {
      type: 'contentFolder',
      postRenderers: ['addFlex'],
      workshopId: {
        folder: "./workshops"
      }
    }
  }
};