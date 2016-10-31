var util = require( '../../common/data.js' );
var businessInfo = {};
var item = {};
var count = 0;
Page( {
    data: {
        // text:"这是一个页面"
        id: "",
        item: item,
        businessInfo,
        count: count
    },
    onLoad: function( options ) {
        // 页面初始化 options为页面跳转所带来的参数
        var items = util.getItemsData();
        businessInfo = util.getStoreData();
        for( var i = 0;i < items.length;i++ ) {
            if( items[ i ].id == options.id ) {
                this.setData( {
                    id: options.id,
                    item: items[ i ],
                    businessInfo: businessInfo
                });
                break;
            }
        }
    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    },
    minusTap: function() {
        count--;
        this.setData( {
            count: count
        });
    },
    addTap: function() {
        count++;
        this.setData( {
            count: count
        });
    }
})