const path = require('path');

    module.exports = {
        watch:true,
        entry:'./src/index.js',
        output: {
            filename:'resto.js',
            path: path.resolve(__dirname,'dist'),
            
        },
        module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.(png|gif|jpeg|jpg|svg)$/i,
                type:'asset/resource',
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                type:'asset/resource',
            },    
        ]
    },

    }