<template>
    <div>
        <div class="alert alert-danger" v-if="error">
            <p>There was an error, unable to sign in with those credentials.</p>
        </div>
        <form autocomplete="off" @submit.prevent="login" method="post">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="password" required>
            </div>
            <button type="submit" class="btn btn-default">Sign in</button>
        </form>
    </div>
</template>
<script>
export default {
  name: 'Login',
  data: function () {
    return {
      error: '',
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      this.$axios.post('http://localhost:2020/api/auth/login', {
        email: this.email,
        password: this.password
      })
        .then((response) => {
          console.log(response)
          alert('success')
        })
    }
  }
}
</script>
