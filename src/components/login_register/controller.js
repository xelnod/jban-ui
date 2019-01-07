import { mapState } from 'vuex';

export default {
  name: 'LoginRegister',
  computed: {
    ...mapState({
      currentUser: state => state.currentUser,
      isLoggedIn: state => state.isLoggedIn,
    }),
  },
  data() {
    return {
      username: '',
      password: '',
      nonFieldErrors: '',
    };
  },
  mounted() {
  },
  methods: {
    login(username, password) {
      this.$store.dispatch('login', { username, password })
        .then((response) => {
          console.log('success', response);
          this.$store.dispatch('refreshState');
        })
        .catch((response) => {
          console.log('error in component', response);
        });
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
