<template>
  <form class="form sign-in" @submit.prevent="authUser">
    <h2>Sign In</h2>

    <label :class="{ 'invalid': invalidUsername }">
      <span>Name</span>
      <input type="text" name="name" v-model="username">
      <p v-show="invalidUsername">Enter a correct username</p>
    </label>

    <label :class="{ 'invalid': invalidPassword }">
      <span>Password</span>
      <input type="password" name="password" v-model="password">
      <p v-show="invalidPassword">
        Enter at least
        {{ $v.password.$params.minLength.min }} characters
      </p>
    </label>

    <button class="submit" type="submit">Sign In</button>
    <p class="forgot-pass">Forgot Password ?</p>
  </form>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import { invalidUsername, invalidPassword } from '@/utils/auth.validation';

export default {
  name: 'SigninForm',
  data() {
    return {
      username: null,
      password: null,
    };
  },
  validations: {
    username: { required },
    password: { required, minLength: minLength(8) },
  },
  methods: {
    async authUser() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      try {
        await this.$store.dispatch('authUser', {
          username: this.username,
          password: this.password,
        });
      } catch (e) {
        return;
      }

      this.$toast.success('You\'ve successfully signed in!');
      this.$router.push({ name: 'Home' });
    },
  },
  computed: {
    invalidUsername() {
      return invalidUsername(this.$v.username);
    },
    invalidPassword() {
      return invalidPassword(this.$v.password);
    },
  },
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
