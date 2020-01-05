<template>
  <v-app>
    <top-bar></top-bar>
    <v-content>
      <v-container>
        <v-layout
          text-center
          wrap>
          <v-flex xs12>
            <v-layout row
              align-center
              justify-center>
              <v-form lazy-validation>
                <v-text-field
                  label="Client ID"
                  v-model="form.id">
                </v-text-field>
                <v-text-field
                  label="Client Secret"
                  v-model="form.secret">
                </v-text-field>
                <v-btn
                  @click.stop="authorize"
                  :disabled="status === 'ok'">
                  Doğrula
                </v-btn>
              </v-form>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import TopBar from '../components/TopBar.vue';

export default {
  name: 'Authorize',
  components: { TopBar },

  computed: {
    ...mapState(['status']),
  },

  data: () => ({
    form: {
      id: '77lbtnvsmsn2dd',
      secret: 'ooqa8qOYetdzcK0d',
    },
  }),

  methods: {
    authorize() {
      this.axios.get('user/authenticate', { params: { ...this.form } })
        .then((res) => {
          window.open(res.data.redirect, '_blank', 'width=640,height=480');
        });
    },
  },
};
</script>
