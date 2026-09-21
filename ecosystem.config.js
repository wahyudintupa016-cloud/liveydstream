module.exports = {
  apps: [
    {
      name: 'liveydstream',
      script: 'app.js',
      watch: false,
      ignore_watch: [
        'node_modules',
        'public/uploads',
        'logs',
        'db',
        'temp'
      ],
      autorestart: true,
      max_memory_restart: '1500M',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
