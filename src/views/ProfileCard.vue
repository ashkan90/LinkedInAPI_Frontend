<template>
  <v-container>
    <v-layout
      text-center
      wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <v-layout row justify-center="" align-center="">
              <v-flex xs12>
                <v-container>
                  <v-layout row>
                    <v-btn icon>
                      <v-icon></v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon></v-icon>
                    </v-btn>
                  </v-layout>
                </v-container>
              </v-flex>
              <v-flex xs12 justify-center>
                <v-avatar color="grey lighten-2" size="62">
                  {{ user.name.charAt(0).toUpperCase() }}
                  {{ user.surname.charAt(0).toUpperCase() }}
                </v-avatar>
              </v-flex>
              <v-flex xs12>
                <span class="text-center">{{ user.name }} {{ user.surname }}</span>
              </v-flex>
              <v-flex xs12>
                <crumby :items="['Web', 'Graphic', 'System']"></crumby>
              </v-flex>
              <v-flex xs12>
                <div class="mt-4 text-center">
                  <span>{{ user.email }}</span>
                </div>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Crumby from '../components/Crumby.vue';

export default {
  name: 'ProfileCard',
  components: { Crumby },
  data: () => ({
    user: {
      email: '',
      name: '',
      surname: '',
    },
  }),

  created() {
    this.profile();
    this.email();
  },

  methods: {
    profile() {
      this.axios.get('user/profile')
        .then((res) => {
          this.user.name = res.data.body.localizedFirstName;
          this.user.surname = res.data.body.localizedLastName;
          // console.log(res.data);
        });
    },
    email() {
      this.axios.get('user/email')
        .then((res) => {
          this.user.email = res.data.body.elements[0]['handle~'].emailAddress;
          // console.log(res.data);
        });
    },
  },
};
</script>
