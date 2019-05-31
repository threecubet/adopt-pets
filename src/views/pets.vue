<template>
    <div>
        <h1>Name: {{ animals.name }} ({{$route.params.species}})</h1>
        <p>Age: {{ animals.age }}</p>
        <p>Breed: {{ animals.breed }}</p>
    </div>
</template>

<script>

// import dogs from '@/data/dogs'
import { mapState } from 'vuex'

export default {
  data () {
    return {
        animals:{}
    }
  },
  computed: {
    ...mapState([
      'dogs',
      'cats'
    ])
  },
   mounted() {
       const animal = this[this.$route.params.species][this.$route.params.id]
       this.animals = animal
   }   
  }

</script>