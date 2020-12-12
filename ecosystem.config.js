module.exports = {
  apps: [
    {
      script: "front",
      mode: "cluster",
      instances: 4,
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start"
    }
  ]
};
