const path = require('path');

module.exports={
    mode:'development',
    devtool:'eval-source-map',
    entry:'./app/app.module.js',
    output:{
        path:path.resolve(__dirname,'dist/app'),
        filename:'app.module.js'
    }
};