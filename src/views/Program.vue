<template>
  <section class="js-page page home">
    <section class="js-program program">
      <div class="columns">
        <div class="js-item intro" data-index="00">
          <h2 class="section-title">Нужен наставник?</h2>
          <div class="description">
            <p>Привет! Ты ещё ищешь наставника? У нас небольшая команда, которая занимается менторством <strong>с упором на веб</strong>.</p>
            <p>Сейчас разрабатываем авторский курс, в ходе которого у тебя будет возможность достаточно активно развиваться. В нём разбираются как самые основы, так и достаточно углублённые темы. Углубленно затронем как фронтенд, так и бэкенд. Будем писать на популярных фреймворках, разберём их внутренности. Пройдём важные и интересные темы <strong>computer science</strong>. Поработаем с используемыми базами данных, захватим паттерны проектирования и архитектурные решения.</p>
            <p>Готовы оказать практически беспрерывную связь: ответы на вопросы и всяческую поддержку. Всё это <strong>абсолютно бесплатно</strong>, мы не хантим никого на какие-либо проекты. Если есть какие-то вопросы — задавай.</p>
          </div>
        </div>
        <Item :i="i" v-for="i in 10" :key="i" />
      </div>
    </section>
  </section>
</template>

<script>
import Masonry from 'masonry-layout'
import Item from '@/components/Item'

export default {
  name: 'Program',
  components: { Item },
  mounted() {
    new Masonry('.columns', {
      itemSelector: '.js-item',
      columnWidth: 640,
      fitWidth: true,
      resize: false
    })
  }
}
</script>

<style lang="sass">
@import '@/assets/sass/style.sass'
</style>