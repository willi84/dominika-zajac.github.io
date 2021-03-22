require('./extraPlugin/workshop-add-flex');
import { ScullyConfig } from '@scullyio/scully';
const {DisableAngular} = require('scully-plugin-disable-angular');

const postRenderers = [DisableAngular];

exports.config = {
  projectRoot: "./src",
  projectName: "ng-girls-page",
  outDir: './dist/static',
  defaultPostRenderers: postRenderers,
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