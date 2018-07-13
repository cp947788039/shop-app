module.exports = {
  IndexUrl: app.config.baseApi + 'index/index', //首页数据接口
  CatalogList: app.config.baseApi + 'catalog/index',  //分类目录全部分类数据接口
  CatalogCurrent: app.config.baseApi + 'catalog/current',  //分类目录当前分类数据接口

  AuthLoginByWeixin: app.config.baseApi + 'auth/loginByWeixin', //微信登录

  GoodsCount: app.config.baseApi + 'goods/count',  //统计商品总数
  GoodsList: app.config.baseApi + 'goods/list',  //获得商品列表
  GoodsCategory: app.config.baseApi + 'goods/category',  //获得分类数据
  GoodsDetail: app.config.baseApi + 'goods/detail',  //获得商品的详情
  GoodsNew: app.config.baseApi + 'goods/new',  //新品
  GoodsHot: app.config.baseApi + 'goods/hot',  //热门
  GoodsRelated: app.config.baseApi + 'goods/related',  //商品详情页的关联商品（大家都在看）

  BrandList: app.config.baseApi + 'brand/list',  //品牌列表
  BrandDetail: app.config.baseApi + 'brand/detail',  //品牌详情

  CartList: app.config.baseApi + 'cart/index', //获取购物车的数据
  CartAdd: app.config.baseApi + 'cart/add', // 添加商品到购物车
  CartUpdate: app.config.baseApi + 'cart/update', // 更新购物车的商品
  CartDelete: app.config.baseApi + 'cart/delete', // 删除购物车的商品
  CartChecked: app.config.baseApi + 'cart/checked', // 选择或取消选择商品
  CartGoodsCount: app.config.baseApi + 'cart/goodscount', // 获取购物车商品件数
  CartCheckout: app.config.baseApi + 'cart/checkout', // 下单前信息确认

  OrderSubmit: app.config.baseApi + 'order/submit', // 提交订单
  PayPrepayId: app.config.baseApi + 'pay/prepay', //获取微信统一下单prepay_id

  CollectList: app.config.baseApi + 'collect/list',  //收藏列表
  CollectAddOrDelete: app.config.baseApi + 'collect/addordelete',  //添加或取消收藏

  CommentList: app.config.baseApi + 'comment/list',  //评论列表
  CommentCount: app.config.baseApi + 'comment/count',  //评论总数
  CommentPost: app.config.baseApi + 'comment/post',   //发表评论

  TopicList: app.config.baseApi + 'topic/list',  //专题列表
  TopicDetail: app.config.baseApi + 'topic/detail',  //专题详情
  TopicRelated: app.config.baseApi + 'topic/related',  //相关专题

  SearchIndex: app.config.baseApi + 'search/index',  //搜索页面数据
  SearchResult: app.config.baseApi + 'search/result',  //搜索数据
  SearchHelper: app.config.baseApi + 'search/helper',  //搜索帮助
  SearchClearHistory: app.config.baseApi + 'search/clearhistory',  //搜索帮助

  AddressList: app.config.baseApi + 'address/list',  //收货地址列表
  AddressDetail: app.config.baseApi + 'address/detail',  //收货地址详情
  AddressSave: app.config.baseApi + 'address/save',  //保存收货地址
  AddressDelete: app.config.baseApi + 'address/delete',  //保存收货地址

  RegionList: app.config.baseApi + 'region/list',  //获取区域列表

  OrderList: app.config.baseApi + 'order/list',  //订单列表
  OrderDetail: app.config.baseApi + 'order/detail',  //订单详情
  OrderCancel: app.config.baseApi + 'order/cancel',  //取消订单
  OrderExpress: app.config.baseApi + 'order/express', //物流详情

  FootprintList: app.config.baseApi + 'footprint/list',  //足迹列表
  FootprintDelete: app.config.baseApi + 'footprint/delete',  //删除足迹
};