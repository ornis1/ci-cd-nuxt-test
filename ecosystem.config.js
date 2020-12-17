module.exports = {
  apps: [
    {
      name: "front1",
      mode: "cluster",
      instances: 4,
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
    },
  ],
};
