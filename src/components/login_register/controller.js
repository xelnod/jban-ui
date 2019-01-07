export default {
  name: 'LoginRegister',
  data() {
    return {
      username: '',
      password: '',
      nonFieldErrors: '',
    };
  },
  mounted() {
    this.getCurrentUser();
  },
  methods: {
    getCurrentUser() {
      fetch('http://localhost:8000/self/', {
        method: 'GET',
        // mode: 'no-cors', // *GET, POST, PUT, DELETE, etc.
      }).then(response => response.json()).then((data) => {
        this.currentUser = data;
      });
    },
    login(username, password) {
      fetch('http://localhost:8000/rest-auth/login/', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(
          { username, password },
        ),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          // "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then(response => response.json()).then((data) => {
        console.log('data');
        console.log(data);
      });
    },
  },
};
