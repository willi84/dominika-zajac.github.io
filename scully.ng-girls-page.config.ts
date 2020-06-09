require('./extraPlugin/workshop-add-flex');

exports.config = {
  projectRoot: './src',
  projectName: 'ng-girls-page',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog'
      }
    },
    '/workshops/:workshopId': {
      type: 'json',
      workshopId: {
        url: 'http://localhost:1668/assets/data/workshops.json',
        id: 'route',
        resultsHandler: function (raw) {
          return raw.map(a => a.route);
        },
      },
      postRenderers: ['addFlex'],
    },
    // '/workshops/:workshopId': {
    //   type: 'contentFolder',
    //   postRenderers: ['addFlex'],
    //   workshopId: {
    //     folder: "./workshops"
    //   }
    // }
  }
};
