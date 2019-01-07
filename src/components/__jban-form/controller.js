import { mapState } from 'vuex';

export default {
  name: 'JbanForm',
  computed: {
    ...mapState({
      currentUser: state => state.currentUser,
      isLoggedIn: state => state.isLoggedIn,
    }),
  },
  props: {
    submit: Function,
    fields: Array,
  },
  data() {
    return {
      nonFieldErrors: [],
    };
  },
  methods: {
    onSubmit() {
      this.nonFieldErrors = [];
      const payload = {};
      this.fields.forEach((item) => {
        item.error = '';
        payload[item.name] = item.value;
      });
      // eslint-disable-next-line no-unused-expressions
      this.submit && this.submit(payload).catch((response) => {
        Object.keys(response).forEach((item) => {
          const fieldObj = this.fields.find(e => e.name === item);
          if (fieldObj) { fieldObj.error = response[item][0]; }
        });
        this.nonFieldErrors = response.non_field_errors;
      });
    },
  },
};
