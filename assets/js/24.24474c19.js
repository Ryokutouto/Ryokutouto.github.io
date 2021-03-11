(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{629:function(t,s,a){"use strict";a.r(s);var o=a(27),r=Object(o.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"es6的class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6的class"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/zhenwen/p/5723759.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES6的Class"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("类的基本写法：")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://cdn.jsdelivr.net/gh/Ryokutouto/images//img/20210311103802.png",loading:"lazy"}})]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://cdn.jsdelivr.net/gh/Ryokutouto/images//img/20210311103808.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("constructor构造函数其实就相当于ES5中的构造函数，用于定义类的实例属性；")]),t._v(" "),a("p",[t._v("而在类中定义的其他方法像这里的toString方法就相当于ES5中定义在原型prototype上的共享方法。")]),t._v(" "),a("p",[t._v("就是语法糖嘛。")]),t._v(" "),a("p",[a("strong",[t._v("constructor方法")])]),t._v(" "),a("p",[t._v("这是类的默认方法，类必须有该方法，如果没有显示定义，会默认添加一个空的constructor方法。")]),t._v(" "),a("p",[a("strong",[t._v("Class的表达式写法")])]),t._v(" "),a("p",[t._v("const Father = class Me{}")]),t._v(" "),a("p",[t._v("其中Me在Class的内部使用，指代当前类，也可以省略掉")]),t._v(" "),a("p",[t._v("const Father = class{}")]),t._v(" "),a("p",[a("strong",[t._v("立即执行的class表达式")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://cdn.jsdelivr.net/gh/Ryokutouto/images//img/20210311103819.png",loading:"lazy"}})]),t._v(" "),a("p",[a("strong",[t._v("不存在变量提升")])]),t._v(" "),a("p",[t._v("和let、const这些新增的变量一样，class也是不存在变量提升的，所以必须在定义之后才可以使用该类。而且也不可以重复定义。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://cdn.jsdelivr.net/gh/Ryokutouto/images//img/20210311103825.png",loading:"lazy"}})]),t._v(" "),a("p",[a("strong",[t._v("class的继承")])]),t._v(" "),a("p",[t._v("通过使用extends关键字实现继承。这就比ES5写起来简单多了，ES5中要实现继承，得把超集的实例赋给子集的prototype，也就是通过原型链实现。")]),t._v(" "),a("p",[t._v("这样子，Son类通过extends继承了Father类的所有属性和方法，相当于复制了一个Father类。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://cdn.jsdelivr.net/gh/Ryokutouto/images//img/20210311103831.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("上面没有显式声明constructor方法，其实是会默认添加constructor方法，而且里面会调用super函数，相当于下面这样：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://cdn.jsdelivr.net/gh/Ryokutouto/images//img/20210311103836.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("也就是说，子类必须在constructor函数中调用super()函数，相当于调用父类的constructor方法，否则在新建实例的时候会出错。")]),t._v(" "),a("p",[t._v("这是因为子类没有自己的this对象，而是通过继承父类的this对象，然后进行修改。Super()函数相当于调用父类的constructor函数，创造了父类的实例对象this，然后就可以用子类的构造函数修改它了。")]),t._v(" "),a("p",[t._v("当就是不调用它的时候")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://cdn.jsdelivr.net/gh/Ryokutouto/images//img/20210311103843.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("就会报错！")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://cdn.jsdelivr.net/gh/Ryokutouto/images//img/20210311103849.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("完整的继承写法是这个样子：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://cdn.jsdelivr.net/gh/Ryokutouto/images//img/20210311103854.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("还要注意，super()函数调用后，子类才可以使用this对象，否则也是会出错的，因为只有调用super()之后，才返回了父类的实例，才可以使用this。")]),t._v(" "),a("p",[t._v("像这样是错误的：")]),t._v(" "),a("p",[a("strong",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://cdn.jsdelivr.net/gh/Ryokutouto/images//img/20210311103900.png",loading:"lazy"}})])])])}),[],!1,null,null,null);s.default=r.exports}}]);