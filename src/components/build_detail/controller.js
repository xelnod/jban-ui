import charSkills from '@/static/char_skills.json';
import runes from '@/static/runes.json';
import petSkills from '@/static/pet_skills.json';
import supportSkills from '@/static/support_skills.json';

export default {
  name: 'BuildDetail',
  data() {
    return {
      buildClass: 'mage',
      currentUser: {},
      msg: 'JBAN — Jban Battle Analysis Network',
      buildPetSkills1: [
        4, 3, 2, 1,
      ],
      buildPetSkills2: [
        4, 3, 2, 1,
      ],
      buildPets: [1, 2],
      buildCharSkills: [],
      buildSupportSkills: [2, 1],
      buildRunes: [],
      charSkills,
      runes,
      petSkills,
      supportSkills,
    };
  },
  mounted() {
    this.getCurrentUser();
    this.getBuild(this.$route.params.id);
  },
  methods: {
    getCurrentUser() {
      fetch('http://localhost:8000/self/', {
        method: 'GET',
        credentials: 'include',
        // mode: 'no-cors', // *GET, POST, PUT, DELETE, etc.
      }).then(response => response.json()).then((data) => {
        this.currentUser = data;
      });
    },
    getBuild(buildId) {
      fetch(`http://localhost:8000/builds/${buildId}/`, {
        method: 'GET',
        // mode: 'no-cors', // *GET, POST, PUT, DELETE, etc.
      }).then(response => response.json()).then((data) => {
        this.buildCharSkills = data.skills;
        this.buildRunes = data.runes;
        this.buildClass = data.default_class;
      });
    },
  },
  props: {

  },
};
