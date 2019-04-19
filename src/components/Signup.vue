<template>
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="btn btn-danger">Register User</h1>
                    <form action="" method="post" v-on:submit.prevent="signup">

                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Full Name</td>
                                    <td><input type="text" name="name" v-model="name" class="form-control" placeholder="Enter name"></td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td><input type="email" name="email" v-model="email" class="form-control" placeholder="Enter email"></td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td><input type="password" name="pass" v-model="pass" class="form-control" placeholder="Enter password"></td>
                                </tr>
                                <tr>
                                    <td colspan="2" align="center"><button class="btn btn-warning">Register</button>

                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-4"></div>
    </div>
</template>
<script>
    export default{
      name: 'Signup',
        data(){
            return{
                name: '',
                email: '',
                password: ''
            }
        },
        methods:{
            signup: function() {
              this.$axios.post('http://localhost:2020/api/auth/signup', {
                  name: this.name,
                  email: this.email,
                  password: this.password
                })
                .then((response) => {
                    alert('success')
                });
            }
        }
    }
</script>