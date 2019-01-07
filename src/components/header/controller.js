import { mapState } from 'vuex';

export default {
  name: 'mainHeader',
  computed: {
    ...mapState({
      currentUser: state => state.currentUser,
    }),
  },
  data() {
    return {
    };
  },
  mounted() {
  },
};
