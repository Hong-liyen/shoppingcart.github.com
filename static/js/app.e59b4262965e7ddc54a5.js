webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},s=i("VU/8")({name:"App"},a,!1,null,null,null).exports,c=i("/ocq"),r=i("bOdI"),o=i.n(r),u={name:"ShoppingList",data:function(){var t;return t={msg:"MyBuylist 購物清單",name:"",price:""},o()(t,"name",""),o()(t,"price",""),o()(t,"quantity",""),o()(t,"items",[{name:"男士背包",price:"499",count:0},{name:"嬰兒奶粉",price:"820",count:0},{name:"筆記型電腦",price:"49999",count:0},{name:"Iphone 9",price:"39999",count:0},{name:"神奇海螺",price:"5000",count:0}]),t},methods:{addBtn:function(){this.name.length&&this.price.length&&this.quantity.length>0?this.items.push({name:this.name,price:this.price,count:this.quantity}):alert("輸入框不可為空白")},remove:function(t){this.$delete(this.items,t)},increment:function(t){this.items[t].count++},decrement:function(t){this.items[t].count--,this.items[t].count<0&&(this.items[t].count="0")}},computed:{getTotal:function(){var t=0;for(var e in this.items)t+=this.items[e].price*this.items[e].count;return t}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ShoppingList"},[i("div",{attrs:{id:"buylist"}},[i("div",{staticClass:"title"},[i("h1",[t._v(t._s(t.msg))]),t._m(0)]),t._v(" "),i("div",{staticClass:"buy_item control_panel"},[i("label",{attrs:{for:""}},[t._v("產品名")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"input_name",placeholder:"名稱..."},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),i("label",{attrs:{for:""}},[t._v("單價")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"number",id:"input_price",placeholder:"234..."},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}}),t._v(" "),i("label",{attrs:{for:""}},[t._v("數量")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number",id:"input_quantity",placeholder:"1組..."},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}}),t._v(" "),i("span",{staticClass:"addbtn",on:{click:t.addBtn}},[t._v("+新增")])]),t._v(" "),t._l(t.items,function(e,n){return i("div",{key:e.id,attrs:{id:"items_list"}},[i("li",{staticClass:"buy_item"},[i("div",{staticClass:"id"},[t._v(t._s(n+1)+".")]),t._v(" "),i("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"price"},[t._v(t._s(e.price*e.count))]),t._v(" "),i("div",{staticClass:"quantity"},[i("button",{staticClass:"minus",on:{click:function(e){t.decrement(n)}}},[t._v("-")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"item.count"}],staticClass:"num",domProps:{value:e.count},on:{input:function(i){i.target.composing||t.$set(e,"count",i.target.value)}}}),i("button",{staticClass:"add",on:{click:function(e){t.increment(n)}}},[t._v("+")])]),t._v(" "),i("div",{staticClass:"del_btn",on:{click:function(e){t.remove(n)}}},[i("i",{staticClass:"fa fa-trash"})])])])}),t._v(" "),i("div",{attrs:{id:"items_list"}},[i("li",{staticClass:"buy_item total"},[t._v("總價\n        "),i("div",{staticClass:"price"},[t._v(t._s(t.getTotal))])])])],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cart"},[e("i",{staticClass:"fa fa-shopping-cart"}),e("span",[this._v("0")])])}]};var p=i("VU/8")(u,l,!1,function(t){i("bUNA")},null,null).exports;n.a.use(c.a);var m=new c.a({routes:[{path:"/",name:"ShoppingList",component:p}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:m,components:{App:s},template:"<App/>"})},bUNA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e59b4262965e7ddc54a5.js.map