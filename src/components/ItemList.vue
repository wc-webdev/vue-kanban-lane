<template>
  <div>
    <ArticleWrapper
      v-for="item in items"
      :key="item.id"
    >
      <router-link
        v-bind:to="`/items/${item.id}`"
        style="text-decoration: none; color: inherit;"
      >
        <ArticleBase>
          <ArticleHeader>
            <ArticleTitle>
              {{item.title}}
            </ArticleTitle>
          </ArticleHeader>
        </ArticleBase>
      </router-link>
    </ArticleWrapper>
  </div>
</template>

<script>
  import { styled, } from 'styletron-vue'

  const ArticleWrapper = styled('article', {
    position: 'relative',
  })

  const ArticleBase = styled('div', {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'currentColor',
    marginTop: '1rem',
    marginBottom: '1rem',
  })

  const ArticleHeader = styled('header', {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
  })

  const ArticleTitle = styled('h2', {
    marginTop: 0,
    marginBottom: 0,
    fontSize: '1em',
  })

  export default {
    name: 'ItemList',
    props: {
      items: Array,
    },
    components: {
      ArticleWrapper,
      ArticleBase,
      ArticleHeader,
      ArticleTitle,
    },
  }
</script>
