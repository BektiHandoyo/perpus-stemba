import config from '../config.js';

const env = process.env.NODE_ENV || 'development';

config[env].migrationStorageTableName = 'SequelizeMeta';

export default config;