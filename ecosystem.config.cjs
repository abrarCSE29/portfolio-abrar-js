module.exports = {
  apps: [
    {
      name: 'abrar-portfolio-prod',
      script: 'npm',
      args: 'run preview --host 0.0.0.0:3001',
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      log_file: './logs/combined-prod.log',
      out_file: './logs/out-prod.log',
      error_file: './logs/error-prod.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      merge_logs: true,
      time: true
    }
  ],
  
  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/abrarCSE29/portfolio-abrar-js.git',
      path: './',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
