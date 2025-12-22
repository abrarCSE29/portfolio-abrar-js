module.exports = {
  apps: [
    {
      name: 'abrar-portfolio',
      script: 'npm',
      args: 'run preview -- --host 0.0.0.0 --port 3001',
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
