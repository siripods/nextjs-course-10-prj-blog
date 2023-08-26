const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
module.exports = (phase) => {

    if (phase == PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'siripods',
                mongodb_password: 'mongo1siri',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'my-site'
            }
        };
    }

    return {
        env: {
            mongodb_password: 'mongo1siri',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site'
        }
    };
};
