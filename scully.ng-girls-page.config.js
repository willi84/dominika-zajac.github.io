exports.config = {
  projectRoot: "./src",
  projectName: "ng-girls-page",
  outDir: './dist/static',
  routes: {
    '/workshops/:workshopId': {
      type: 'contentFolder',
      workshopId: {
        folder: "./workshops"
      }
    }
  }
};