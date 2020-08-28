<template>
  <form class="form sign-up" @submit.prevent="createUser">
    <h2>Sign Up</h2>

    <label :class="{ 'invalid': invalidUsername }">
      <span>Name</span>
      <input type="text" v-model="username">
      <p v-show="invalidUsername">Enter a correct username</p>
    </label>

    <label :class="{ 'invalid': invalidEmail }">
      <span>Email</span>
      <input type="email" v-model="email">
      <p v-show="invalidEmail">Enter a correct email</p>
    </label>

    <label :class="{ 'invalid': invalidPassword }">
      <span>Password</span>
      <input type="password" v-model="password">
      <p v-show="invalidPassword">
        Enter at least
        {{ $v.password.$params.minLength.min }} characters
      </p>
    </label>

    <label :class="{ 'invalid': invalidPassword2 }">
      <span>Confirm Password</span>
      <input type="password" v-model="password2">
      <p v-show="invalidPassword2">The passwords don't match</p>
    </label>

    <button type="submit" class="submit">Sign Up Now</button>
  </form>
</template>

<script>
import {
  invalidUsername,
  invalidEmail,
  invalidPassword,
  invalidSecondPassword,
} from '@/utils/auth.validation';

import {
  required,
  minLength,
  email,
  sameAs,
} from 'vuelidate/lib/validators';

export default {
  name: 'SignupForm',
  data() {
    return {
      username: null,
      email: null,
      password: null,
      password2: null,
    };
  },
  validations: {
    username: { required },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    password2: { required, sameAsPassword: sameAs('password') },
  },
  methods: {
    async createUser() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch('createUser', userData);
        this.$toast.success('You\'ve successfully signed up!');
        this.$router.push({ name: 'Home' });
      } catch (e) {
        // pass
      }
    },
  },
  computed: {
    invalidUsername() {
      return invalidUsername(this.$v.username);
    },
    invalidEmail() {
      return invalidEmail(this.$v.email);
    },
    invalidPassword() {
      return invalidPassword(this.$v.password);
    },
    invalidPassword2() {
      return invalidSecondPassword(this.$v.password2);
    },
  },
};
</script>

<style scoped>
.sign-up{
  -webkit-transform:translate3d(-900px, 0, 0);
          transform:translate3d(-900px, 0, 0);
}
</style>
