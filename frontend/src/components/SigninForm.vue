<template>
  <form class="form sign-in">
    <h2>Sign In</h2>

    <label>
      <span>Name</span>
      <input type="text" name="name">
    </label>
    <label>
      <span>Password</span>
      <input type="password" name="password">
    </label>

    <button class="submit" type="button">Sign In</button>
    <p class="forgot-pass">Forgot Password ?</p>
  </form>
</template>

<script>
export default {
  name: 'Signin',
};
</script>

<style scoped>
.sign-in{
  padding-top: 65px;
  -webkit-transition-timing-function:ease-out;
          transition-timing-function:ease-out;
}

.forgot-pass{
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #0c0101;
  cursor: pointer;
  transition: 0.3s;
}

.forgot-pass:hover{
  color: #505f75;
}
</style>
