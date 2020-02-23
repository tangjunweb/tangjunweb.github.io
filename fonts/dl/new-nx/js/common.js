require.config({
    baseUrl: 'js',
    waitSeconds: 30,
    paths: {
        'jquery': 'lib/jquery-1.8.2',
        'fullPage': '/lib/jquery.fullPage',
        'slimscroll': 'jquery.slimscroll.min',
        'swiper': 'swiper.min',
        'iscroll': 'iscroll',
        'layui': 'layui',
        'idcode': 'jquery.idcode',
        'md5': 'jquery.md5'
    },
    shim: {
        jquery: {
            exports: 'jquery'
        },
        fullPage: ['jquery'],
        slimscroll: ['jquery'],
        idcode: ['jquery'],
        md5: ['jquery'],
    }
});