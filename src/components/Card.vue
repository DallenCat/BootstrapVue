<template>
  <b-container>
    <div v-if="meals.length">
      <b-row>
        <div v-bind:key="data.index" v-for="data in meals">
          <b-col l="4">
            <b-card
              tag="article"
              bg-variant="light"
              class="mt-2">
              <b-row>
                <b-col md="8">
                  <b-card-title>{{data.strCategory}}</b-card-title>
                  <b-card-text>{{ `${data.strCategoryDescription.slice(0,100)}...` }}</b-card-text>
                  <b-button href="#" variant="primary">View food</b-button>
                </b-col>
                <b-col md="4">
                  <b-card-img-lazy fluid :src="data.strCategoryThumb" right></b-card-img-lazy>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </div>
      </b-row>
    </div>
    <div v-else>
      <h5>正在加载中... 😢</h5>
    </div>
  </b-container>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        meals: []
      };
    },
    mounted() {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => {
        this.meals = response.data.categories;
      })
        .catch(err => {
        console.log(err);
      });
    }
  };
</script>
<style lang="scss">
.row{
  justify-content:center;
}
@media (min-width: 1200px) {
  .card-body{
    width: 70rem;
  }
}
</style>