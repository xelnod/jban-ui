import { mapState } from 'vuex';
import JbanForm from '@/components/__jban-form';

export default {
  name: 'LoginForm',
  components: { JbanForm },
  computed: {
    ...mapState({
      currentUser: state => state.currentUser,
      isLoggedIn: state => state.isLoggedIn,
    }),
  },
  data() {
    return {
      fields: [
        {
          label: 'Username',
          name: 'username',
          type: 'text',
          value: '',
          error: '',
        },
        {
          label: 'Password',
          name: 'password',
          type: 'password',
          value: '',
          error: '',
        }],
    };
  },
  methods: {
    login(data) {
      return new Promise((resolve, reject) => {
        this.$store.dispatch('login', { username: data.username, password: data.password })
          .then((response) => {
            this.$store.dispatch('refreshState');
            resolve(response);
          })
          .catch((response) => {
            reject(response);
          });
      });
    },
  },
};
