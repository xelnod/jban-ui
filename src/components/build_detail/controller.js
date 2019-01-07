import charSkills from '@/static/char_skills.json';
import runes from '@/static/runes.json';
import petSkills from '@/static/pet_skills.json';
import supportSkills from '@/static/support_skills.json';
import { mapState } from 'vuex';

export default {
  name: 'BuildDetail',
  data() {
    return {
      build: {
        class: this.currentUser.class,
        pet1Skills: [0, 0, 0, 0],
        pet2Skills: [0, 0, 0, 0],
        pets: [1, 2],
        charSkills: [],
      },
      charSkills,
      runes,
      petSkills,
      supportSkills,
    };
  },
  computed: {
    ...mapState({
      currentUser: state => state.currentUser,
    }),
  },
  mounted() {
    this.getBuild(this.$route.params.id);
  },
  methods: {
    getBuild(buildId) {
      fetch(`http://localhost:8000/builds/${buildId}/`, {
        method: 'GET',
      }).then(response => response.json()).then((data) => {
        this.build.charSkills = data.skills;
        this.build.runes = data.runes;
        this.build.class = data.default_class;
      });
    },
  },
  props: {
  },
};
