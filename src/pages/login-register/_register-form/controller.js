import { mapState } from 'vuex';
import JbanForm from '@/components/__jban-form';

export default {
  name: 'RegisterForm',
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
          label: 'My name is...',
          name: 'username',
          type: 'text',
          value: '',
          error: '',
        },
        {
          label: 'My password will be...',
          name: 'password',
          type: 'password',
          value: '',
          error: '',
        },
        {
          label: 'I\'m 100% sure, my password will be',
          name: 'password2',
          type: 'password',
          value: '',
          error: '',
        },
        {
          label: 'I play a...',
          name: 'class',
          type: 'select',
          value: 'swordman',
          error: '',
          options: [
            {
              label: 'Swordman',
              value: 'swordman',
            },
            {
              label: 'Mage',
              value: 'mage',
            },
            {
              label: 'Archer',
              value: 'archer',
            },
            {
              label: 'Thief',
              value: 'thief',
            },
          ],
        },
      ],
      errors: {},
      nonFieldErrors: '',
    };
  },
  methods: {
    register(data) {
      console.log(data);
      return new Promise((resolve, reject) => {
        this.$store.dispatch('register', {
          username: data.username,
          password: data.password,
          password2: data.password2,
          preferred_class: data.class,
        })
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
