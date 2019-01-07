import * as Api from '@/api';

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
        class: 'swordman',
        pet1Skills: [0, 0, 0, 0],
        pet2Skills: [0, 0, 0, 0],
        pets: [0, 0],
        charSkills: [],
        runes: [],
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
      Api.getBuild(buildId).then((data) => {
        this.build.charSkills = data.skills;
        this.build.runes = data.runes;
        this.build.class = data.default_class;
      }).catch();
    },
  },
  props: {
  },
};
