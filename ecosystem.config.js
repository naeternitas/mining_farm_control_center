module.exports = {
  apps : [
    {
      name: 'mfcc',
      script: './bin/www',
      watch: false,
      env: {
        'PORT': 3000,
        'NODE_ENV': 'development'
      },
      env_production: {
        'PORT': 3001,
        'NODE_ENV': 'production',
        'LOG_LEVEL': 'info',
      },
      env_dryrun: {
        'PORT': 3001,
        'NODE_ENV': 'development',
        'LOG_LEVEL': 'verbose',
        'MFCC_DRY_RUN': 'true',
      }
    }
  ]
};
