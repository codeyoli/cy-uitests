import { defineConfig } from 'cypress'
import { taskProcesses } from './tasks.js'
import pkgs from '@reportportal/agent-js-cypress/lib/plugin/index.js'

export default defineConfig({
   viewportHeight: 1200,
   viewportWidth: 1900,
   video: true,
   reporter: '@reportportal/agent-js-cypress',
   reporterOptions: {
      endpoint: 'http://ec2-34-232-72-122.compute-1.amazonaws.com:8080/api/v1',
      apiKey: 'repodemo_J41e1bjERian9fhecNYmDb2vr5I-FiVbwplbiUy9JR5W0RV10GFmG5iQXQq2grRK',
      launch: 'muktar_load_test',
      project: 'catmirs',
      description: 'Smoke Test Demo',
      attributes: [
         {
            key: 'demo',
            value: 'cypress',
         },
         {
            value: 'Smoke Test',
         },
      ],
   },
   e2e: {
      baseUrl: 'https://angular.realworld.how/',
      setupNodeEvents(on, config) {
         on('task', taskProcesses)
         return pkgs(on, config)
      },
   },
})
