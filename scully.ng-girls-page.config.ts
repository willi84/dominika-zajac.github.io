require('./extraPlugin/workshop-add-flex');

exports.config = {
  projectRoot: "./src",
  projectName: "ng-girls-page",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    '/workshops/:workshopId': {
      type: 'contentFolder',
      postRenderers: ['addFlex'],
      workshopId: {
        folder: "./workshops"
      }
    }
  },
  puppeteerLaunchOptions: {
    args: ['--no-sandbox']
  }
};