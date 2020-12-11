module.exports = {
  apps: [
    {
      name: "start front",
      script: "yarn",
      args: "start",
      watch: ".",
      env: {
        PORT: 7000
      }
    }
  ]
};
