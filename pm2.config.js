
module.exports = {
  apps: [
    {
      name: "email",
      script: "dist/server.js",
      log_file: "logs/email.log",
      merge_logs: true,
      env: {
        NODE_ENV: "development",
        PORT: 8500,
        USERNAME: "",
        PASSWORD: "",
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 4500,
        USERNAME: "",
        PASSWORD: "",
      },
    },
  ]
};
