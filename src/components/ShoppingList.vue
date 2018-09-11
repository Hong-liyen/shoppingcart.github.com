<template>
  <div class="ShoppingList">
    <div id="buylist">
      <div class="title"><h1>{{msg}}</h1><div class="cart"><i class="fa fa-shopping-cart"></i><span>0</span></div></div>
      <div class="buy_item control_panel">
        <label for="">產品名</label>
        <input type="text" id="input_name" v-model="name" placeholder="名稱..." />
        <label for="">單價</label>
        <input type="number" id="input_price" v-model="price" placeholder="234..." />
        <label for="">數量</label>
        <input type="number" id="input_quantity" v-model="quantity" placeholder="1組..." />
        <span class="addbtn" @click="addBtn">+新增</span>
      </div>

      <div id="items_list" v-for="item,index in items" :key="item.id">
        <li class="buy_item">
          <div class="id">{{index+1}}.</div>
          <div class="name">{{item.name}}</div>
          <div class="price">{{item.price * item.count}}</div>
          <div class="quantity">
            <button class="minus" @click="decrement(index)">-</button><input class="num" v-model="item.count"><button class="add" @click="increment(index)">+</button>
          </div>
          <div class="del_btn" @click="remove(index)"><i class="fa fa-trash"></i></div>
        </li> 
      </div>

      <div id="items_list">
        <li class="buy_item total">總價
          <div class="price">{{getTotal}}</div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingList",
  data() {
    return {
      msg: "MyBuylist 購物清單",
      name: "",
      price: "",
      quantity: 0,
      items: [
        {
          name: "男士背包",
          price: "499",
          count: 0
        },
        {
          name: "嬰兒奶粉",
          price: "820",
          count: 0
        },
        {
          name: "筆記型電腦",
          price: "49999",
          count: 0,
        },
        {
          name: "Iphone 9",
          price: "39999",
          count: 0
        },
        {
          name: "神奇海螺",
          price: "5000",
          count: 0
        }
      ]
    };
  },
  methods: {
    addBtn: function() {
      var name = this.name;
      var reg = /^[0-9]*$/;
      if (!reg.test(name) || name == 0) {
        alert("請輸入產品名稱");
        return false;
      }
      if (this.items.length > 0) {
        this.items.push({
          name: this.name,
          price: this.price,
          count: this.quantity
        });
      }
    },
    remove(index) {
      this.$delete(this.items, index);
    },
    increment: function(index) {
      this.items[index].count++;
    },
    decrement: function(index) {
      this.items[index].count--;
      if (this.items[index].count < 0) {
        this.items[index].count = '0';
      }
    }
  },
  computed: {
    getTotal: function() {
      var sum = 0;
      for (var i in this.items) {
        sum += this.items[i].price * this.items[i].count;
      }
      return sum;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$color_black: #444;
$color_yellow: #ffc954;
$color_red: #ff3d4a;
$color_white: #f3f3f3;

* {
  position: relative;
  font-family: "Microsoft Yahei", sans-serif;
}

html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color_yellow;
}

#buylist {
  display: inline-block;
  padding: 20px;
  border: solid 4px $color_black;
  background-color: $color_white;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
}
.title {
  margin-top: -20px;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: 20px;
  background-color: $color_red;
  color: $color_white;
  padding: 10px 20px;
  border-bottom: solid 4px $color_black;
  > * {
    display: inline-block;
  }
  h1 {
    margin: 0;
    font-weight: 600;
    width: 70%;
  }
  .cart {
    position: relative;
    font-size: 18px;
    width: 30%;
    text-align: right;
    .fa {
      font-size: 38px;
    }
    span {
      position: absolute;
      text-align: center;
      font-weight: bold;
      right: -14px;
      top: -12px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      border-radius: 100%;
      background-color: $color_yellow;
      color: $color_black;
    }
  }
}

#items_list {
  margin-top: 10px;
  padding: 5px;
}

.control_panel {
  padding: 20px;
}
.buy_item {
  display: block;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  border: solid 3px $color_black;
  font-weight: 900;
  > * {
    display: inline-block;
  }
  .id {
    width: 5%;
    text-align: center;
    background-color: lighten($color_red, 30%);
    color: lighten($color_black, 15%);
  }
  .name {
    width: 20%;
    font-size: 0.8em;
  }
  input {
    width: 100px;
    border: solid 3px;
    padding: 2px;
    background-color: darken($color_white, 5%);
  }
  .price {
    display: inline-block;
    width: 22%;
    padding: 0 5px;
    background-color: $color_yellow;

    &::before {
      content: " $";
    }
  }
  .quantity {
    width: 33%;
    background-color: $color_black;
    color: $color_white;
    text-align: center;
    .minus,
    .num,
    .add {
      display: inline-block;
    }
    .num {
      width: 37%;
      background-color: transparent;
      color: #fff;
      border: 0;
      outline: 0;
      text-align: center;
      font-size: 0.8em;
    }
    .minus,
    .add {
      background-color: darken($color_white, 55%);
      color: $color_white;
      border: 0;
      outline: 0;
      appearance: none;
      width: 30%;
      font-size: 22px;
      text-align: center;
      cursor: pointer;
      user-select: none;
      transition: all 0.3s linear;
      &:hover {
        background-color: darken($color_white, 20%);
        color: $color_black;
      }
    }
  }
  .add_cart {
    color: darken($color_yellow, 10%);
    padding: 0px 6px;
    cursor: pointer;
    transition: all 0.3s linear;
    &:hover {
      background-color: darken($color_yellow, 5%);
      color: white;
    }
  }
  .del_btn {
    color: $color_red;
    display: inline-block;
    position: absolute;
    padding: 0px 6px;
    right: 10px;
    top: 7px;
    cursor: pointer;
    transition: all 0.3s linear;
    &:hover {
      background-color: $color_red;
      color: white;
    }
  }
  .addbtn {
    background-color: lighten($color_red, 30%);
    cursor: pointer;
    margin-left: 10px;
    padding: 5px;
    border: solid 3px lighten($color_black, 20%);
    transition: all 0.3s linear;
    &:hover {
      background-color: $color_red;
      color: white;
    }
  }
}
.total {
  display: block;
  width: 100%;
  background-color: $color_red;
  color: $color_white;
  text-align: right;
  .price {
    background-color: transparent;
  }
}
</style>
