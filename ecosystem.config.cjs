module.exports = {
  apps: [
    {
      name: 'abrar-portfolio',
      script: 'npm',
      args: 'run preview',
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
