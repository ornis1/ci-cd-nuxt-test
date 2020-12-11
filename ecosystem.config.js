module.exports = {
  apps: [
    {
      name: "front",
      script: "yarn",
      args: "start",
      watch: ".",
      watch_delay: 1000,

      env: {
        PORT: 7000,
        HOST: "127.0.0.1"
      }
    }
  ]
};
