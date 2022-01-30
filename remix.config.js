/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  routes: (defineRoutes) => {
    return defineRoutes(route => {
      route('/', './pages/Home.tsx')
      route('/about', './pages/About.tsx')
      route('/contact', './pages/Contact.tsx')
    })
  }
};
