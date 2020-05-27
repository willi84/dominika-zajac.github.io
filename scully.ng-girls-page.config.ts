require('./extraPlugin/workshop-add-flex');

const { registerPlugin } = require('@scullyio/scully');

import { readFileSync } from 'fs';

 async function dynamicRoutePlugin(angularRoute, conf = {}) {
  const parts = angularRoute.split('/');
  const param = parts.filter(p => p.startsWith(':')).map(id => id.slice(1))[0];
  const paramConfig = conf[param];
  return await checkSourceIsDirectoryAndRun(paramConfig['path'],paramConfig['property'], angularRoute.split(':')[0]);
}

async function checkSourceIsDirectoryAndRun(path, prop, newroute) {
  const files =  readFileSync(path, 'utf-8');
  const jsonFile = JSON.parse(files);
  let handledRoutes = [];
  for (const workshop of jsonFile) {
    handledRoutes.push(
      { route: newroute + workshop[prop] })
  }
  return handledRoutes;
}

registerPlugin('router', 'dynamicRoute', dynamicRoutePlugin);

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
      type: 'dynamicRoute',
      workshopId: {
        property: 'route',
        path:'src/assets/data/workshops.json'
      }
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