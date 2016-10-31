function getItemsData()
{
   var  items=[
        {id:"jichi",name:"鸡翅",src:"../../Images/jichi.png",price:10,count:2,piece:"个",type:1},
        {id:"shenghao",name:"生蚝",src:"../../Images/shenghao.png",price:20,count:4,piece:"个",type:1},
        {id:"regou",name:"热狗",src:"../../Images/regou.png",price:3,count:1,piece:"根",type:1},
        {id:"xiaolongxia",name:"小龙虾",src:"../../Images/xiaolongxia.png",price:45,count:1,piece:"份",type:1},
        {id:"jiucai",name:"韭菜",src:"../../Images/jiucai.png",price:15,count:1,piece:"份",type:1},
        {id:"niurouchuan",name:"牛肉串",src:"../../Images/niurouchuan.png",price:3,count:1,piece:"串",type:1},
        {id:"yangrouchuan",name:"羊肉串",src:"../../Images/yangrouchuan.png",price:10,count:1,piece:"串",type:1},
        {id:"wanglaoji",name:"王老吉",src:"../../Images/wanglaoji.png",price:5,count:1,piece:"罐",type:2},
        {id:"xuebi",name:"雪碧",src:"../../Images/xuebi.png",price:4,count:1,piece:"罐",type:2},
        {id:"kele",name:"可乐",src:"../../Images/kele.png",price:4,count:1,piece:"罐",type:2},
        {id:"chengzhi",name:"橙汁",src:"../../Images/chengzhi.png",price:8,count:1,piece:"罐",type:2},
    ];
    return items;
}

function getTypes()
{
   var  items=[
        {id:"1",name:"烧烤"},
        {id:"2",name:"饮料"},
    ];
    return items;
}

function getStoreData()
{
   var item={
        name:"萌萌烧烤屋",
        logo:"../../Images/logo.jpeg",
        desc:"大酬宾，大优惠！",
        address:"深圳市龙华新区XXX路11号",
        tel:"1850000000",
        master:"林老板"
   };
   return item;
}

module.exports = {
  getItemsData: getItemsData,
  getStoreData:getStoreData,
  getTypes:getTypes
}
