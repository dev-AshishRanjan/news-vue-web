<template>
  <div class="page">
    <div class="card" v-for="(ele, i) in data" :key="i">
      <img :src="ele.urlToImage" alt='lol'>
      <h2>{{ ele.title }}</h2>
      <p>{{ ele.description }}</p>
      <div class="card_footer">
        <span class="source">{{ ele.source.name }}</span>
        <!-- <span class="date">{{ ele.publishedAt.split('T')[0] }}</span> -->
        <a :href="ele.url" target="_blank">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageComponent',
  props: ['data']
}
</script>

<style lang="scss">
@mixin flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100vh;
  width: 100%;
  background: #151515
}

.page {
  @include flexCenter;
  flex-wrap: wrap;
  gap: 1.5rem;
  background: #151515;
}

.card {
  width: 45%;
  padding: 1rem;
  border-radius: 0.3rem;
  background: #301B3F;
  min-height: 50vh;
  overflow: hidden;
  margin-bottom: 0.5rem;

  @include flexCenter;
  flex-direction: column;

  box-shadow: 4px 4px 10px black;

  img {
    width: 110%;
    height: 20rem;
    opacity: 0.7;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  h2 {
    font-size: 1.2rem;
    text-align: left;
    margin: 1rem 0;
    color: #cdbbbb;
  }

  p {
    font-size: 1rem;
    color: #B4A5A5;
    text-align: left;
    margin: 1.5rem 0;
  }

  .source {
    background: #151515;
    padding: 0.5rem;
    border-radius: 0.2rem;
  }

  .date {
    color: #3C415C;
  }

  a {
    text-decoration: none;
    background: #3C415C;
    padding: 0.5rem;
    border-radius: 0.2rem;
    color: #B4A5A5;
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 2px 5px black;

    &:hover {
      background: #151515;
    }
  }

  .card_footer {
    width: 100%;
    @include flexCenter;
    justify-content: space-between;
  }
}

@media (max-width:786px) {
  .card {
    width: 80%;

    img {
      width: 120%;
      height: 12.5rem;
    }
  }
}
</style>
