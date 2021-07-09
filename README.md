## react-redux基本使用
    (1).概念：
        1).UI组件：不能使用任何redux的api，只负责页面的呈现、交互等。
        2).容器组件：负责和redux通信，将结果交给UI组件。
    (2).如何创建一个容器组件 —— 靠react-redux的connect函数
        写法： connect(mapStateToProps,mapDispatchToProps)(UI组件)
        - mapStateToProps:映射状态，返回值是一个对象
        - mapDispatchToProps:映射操作状态的方法，返回值是一个对象
    (3).备注：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入