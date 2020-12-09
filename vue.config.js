const port = 8589; // dev port
// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
    devServer: {
        port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        // 配置代理 （以接口 https://www.easy-mock.com/mock/5ce2a7854c85c12abefbae0b/api 说明）

    },
    lintOnSave: false

};

