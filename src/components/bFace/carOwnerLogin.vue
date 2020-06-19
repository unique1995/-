<template>
  <div class="carlogin">
    <van-dialog v-model="show" width="345" :showConfirmButton="bool">
      <van-form class="car-user" @submit="onSubmit">
        <img src="../../assets/user.png" alt class="user" />
        <van-field v-model="username" name="用户名" placeholder="用户名" />
        <img src="../../assets/password.png" alt class="password" />
        <van-field v-model="password" type="password" name="密码" placeholder="密码" />
        <div class="button">
          <van-button round block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </van-dialog>
  </div>
</template>

<script>
import { storeUserLogin } from "@/api/custInfo";
export default {
  name: "carOwnerLogin",
  data() {
    return {
      show: true,
      bool: false,
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.username == "" || this.password == "") {
        this.$toast("用户名与密码不能为空");
        return;
      }
      /*sessionStorage.setItem("userName",this.username);
                this.$router.push("carInfoList")
				return;*/
      let param = {
        phone: this.username,
        password: this.password
      };
      storeUserLogin(param).then(res => {
        if (res.data.code == 1) {
          sessionStorage.setItem("user_name", this.username);
          this.$router.push({
            name: "carVipSearch",
            params: {
              user_id: res.data.su
            }
          });
        } else {
          this.$toast(res.data.msg);
        }
      });
    }
  },
  mounted() {}
};
</script>

<style scoped>
.carlogin {
  background: url(../../assets/czfwbg.jpg) no-repeat;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.car-user {
  margin: 0 30px;
  position: relative;
  height: 404px;
  padding-left: 90px;
  margin-top: 10px;
}
.car-user img {
  width: 45px;
  height: 45px;
}
.user {
  position: absolute;
  top: 30px;
  left: 49px;
}
.password {
  position: absolute;
  top: 140px;
  left: 49px;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 16px 0 16px -45px;
  border-radius: 4px;
}
.van-button {
  border-radius: 4px;
}
.van-button--normal {
  padding: 0;
}
</style>