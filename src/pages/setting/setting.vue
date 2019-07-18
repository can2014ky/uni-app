<template>
  <div class="setting-ctn">
    <div v-for="(item, index) in list" :key='index' class="item">
      <div class="title">{{item.title}}</div>
      <div class="des">
        <span v-if='index'>{{item.des}}</span>
        <switch v-else @change='onChange' :checked='isChecked' color='#FF8E74' />
      </div>
    </div>
    <div class="logout">退出登录</div>
  </div>
</template>
<script>
import { constants } from 'crypto';
export default {
  data() {
    return {
      list: [
        {
          title: '是否接收打卡提醒',
          des: ''
        },
        {
          title: '版本信息',
          des: 'v1.0.0'
        },
      ],
      isChecked: false,
    }
  },
  methods: {
    onChange(ev) {
      this.isChecked = ev.detail.value;
    },
  },
}
</script>
<style lang='less'>
  .setting-ctn {
    padding-top: 28rpx;
    .item {
      margin-left: 30rpx;
      height: 96rpx;
      line-height: 96rpx;
      display: flex;
      justify-content: space-between;
      padding-right: 30rpx;
      position: relative;
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #E3E7E8;
        position: absolute;
        left: 0;
        bottom: 0;
        transform: scaleY(0.5);
      }
      .title {
        font-size:30rpx;
        font-weight:400;
        color:rgba(53,53,54,1);
      }
      .des {
        font-size:30rpx;
        font-weight:400;
        color:rgba(155,155,157,1);
      }
    }
    .logout {
      width:650rpx;
      height:96rpx;
      border-radius:56rpx;
      border:2rpx solid rgba(243,246,249,1);
      line-height: 96rpx;
      font-size:36rpx;
      font-weight:400;
      color:rgba(248,84,46,1);
      text-align: center;
      margin: auto;
      margin-top: 100rpx;
    }
  }
  
</style>

