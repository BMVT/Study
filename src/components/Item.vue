<template>
  <div :class="`js-item js-chapter chapter animate__animated animate__rotateIn chapter-${num}`" :data-index="num">
    <div class="grid">
      <div class="line horizontal"></div>
      <div class="line horizontal"></div>
      <div class="line horizontal"></div>
      <div class="line vertical"></div>
      <div class="line vertical"></div>
      <div class="line vertical"></div>
      <div class="line vertical"></div>
      <div class="shadow"></div>
    </div>
    <div class="illustration is-visible">
      <img v-if="i < 6" :src="require(`@/assets/images/program/chapter-${num}.png`)"
        :srcset="require(`@/assets/images/program/chapter-${num}@2x.png`) + ' 2x'" :width="size.width" :height="size.height">
      <img v-else :src="require(`@/assets/images/program/${i}.svg`)" :width="size.width" :height="size.height">
    </div>
    <small class="number element delay-0">{{ num }}</small>
    <h3 class="section-title element delay-1">{{ title }}</h3>
    <div class="description element delay-2">
      <p>{{ text_1 }}</p>
      <p>{{ text_2 }}</p>
    </div>
    <div class="information element delay-3">
      <span class="format-icon"><svg width="18" height="25" viewBox="0 0 18 25" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M6 16.0469H13" stroke="#54BAF3" stroke-width="2" stroke-linecap="round" />
          <path d="M6 19.0469H13" stroke="#54BAF3" stroke-width="2" stroke-linecap="round" />
          <path
            d="M1 3.04687C1 4.15144 1.89543 5.04688 3 5.04688H17V1.12851C17 1.08342 16.9635 1.04687 16.9184 1.04687H3C1.89543 1.04687 1 1.94231 1 3.04687V3.04687Z"
            stroke="#54BAF3" stroke-width="2" />
          <path d="M11 10.9288L13 9.92884V6.04688H9V9.92884L11 10.9288Z" stroke="#54BAF3" stroke-width="2" />
          <path
            d="M1 3.04688V21.0469C1 22.1514 1.89543 23.0469 3 23.0469H16C16.5523 23.0469 17 22.5992 17 22.0469V3.04688"
            stroke="#54BAF3" stroke-width="2" />
        </svg>
      </span>
      {{ description }}
    </div>
    <ul class="lessons">
      <li class="element" v-for="(element, el) in elements" :key="el">
        <span class="lesson-number">{{ getNum(el+1) }}</span>
        <span v-if="tooltip(el)" class="lesson-title" v-tippy :content="tooltip(el)">{{ element.text }}</span>
        <span v-else class="lesson-title">{{ element.text }}</span>
        <span class="lesson-duration">{{ element.duration }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['i'],
  computed: {
    num() {
      return this.i < 10 ? '0'+this.i : this.i
    },
    title() {
      const titles = [
        'Основы',
        'Computer Science',
        'Продвинутый JS, HTML, CSS',
        'Vue, React и Node.js',
        'Базы данных и архитектура',
        'DevOps',
        'GitHub, GitFlow',
        'SSR и Electron',
        'Паттерны проектирования',
        'Практические проекты',
      ]
      return titles[this.i-1]
    },
    text_1() {
      return 'В ходе прохождения курса мы реализуем ряд интересных проектов для подкрепления знаний и поддержания вашего интереса.'
    },
    text_2() {
      return 'Мы постарались придумать самые вариативные проекты, чтобы разработка никому не наскучила.'
    },
    description() {
      return `${this.elements.length} lessons — 9h 14mn`
    },
    size() {
      const sizes = [
        { width: 313, height: 406 },
        { width: 415, height: 447 },
        { width: 347, height: 444 },
        { width: 409, height: 384 },
        { width: 350, height: 321 },
        { width: 227, height: 227 },
        { width: 200, height: 200 },
        { width: 200, height: 200 },
        { width: 160, height: 160 },
        { width: 200, height: 200 }
      ]
      return sizes[this.i-1]
    },
    elements() {
      return [
        { text: 'Приложение для музыки', duration: '18mn' },
        { text: 'Видеоплеер', duration: '23mn' },
        { text: 'Клон Paint', duration: '36mn' },
        { text: 'Приложение Банк', duration: '35mn' },
        { text: 'Угадай число (улучшено)', duration: '46mn' },
        { text: 'Крестики-нолики (улучшено)', duration: '30mn' },
        { text: 'PWA', duration: '57mn' },
        { text: 'Клавагонки', duration: '30mn' },
        { text: 'Тренировка реакции', duration: '35mn' },
        { text: 'Калькулятор (две версии)', duration: '38mn' },
        { text: 'Текстовый редактор', duration: '1h 14mn' },
      ]
    }
  },
  methods: {
    getNum(i) {
      return i < 10 ? '0'+i : i
    },
    tooltip(el) {
      const tooltips = [
        'Мы создадим небольшое музыкальное приложение, через которое вы сможете добавлять, удалять и слушать музыкальные произведения. Мы реализуем полноценный плеер, а также компактный список плейлистов. Вместе с этим мы сэмулируем хранение музыки, а базируясь на этом будем также выводить общий каталог, из которого аудиозаписи можно будет переместить в ваши плейлисты.',
        'Мы создадим полноценный видеоплеер, который вы сможете использовать для просмотра видеороликов. Вы сможете листать видео, менять качество и даже включать подготовленные субтитры.',
        'Реализуем приложение для рисования, которое будет подозрительно сильно похоже на Paint. Введем туда известные функции таких редакторов, чем закрепим прочитанный материал о Canvas.',
        'Современный человек прекрасно знает, что такое банковское приложение и как оно работает. Напишем свою минималистичную копию, в пределах которой мы сможем выпускать карты, пополнять их счёт, переводить средства на другие карты и снимать деньги (ремарка: ненастоящие!). Также реализуем несколько «магазинов», которые будут продавать нам товары. Внедрим систему отчётов и возвращения денег за покупки.',
        'Привычная для нас игра, где ведущий загадывает число от 0 до N, а наша задача угадать его за наименьшее количество попыток. Но это было бы слишком просто, поэтому мы также реализуем голосовой ввод для данной игры, для чего нам потребуется научиться распознавать речь. А вместе с этим немного оживим нашего ведущего и основываясь на ранее изученных алгоритмах позволим нашему боту стать непобедимым — он будет последовательно играть по тактике деления пополам.',
        'Реализуем столь популярную игру с добавлением небольшой детали — нашим противником станет не такой уж и глупый бот, который будет выбирать оптимальные ходы с помощью ранее пройденного нами правила принятия решений — Minimax.',
        'Напишем Progressive Web Application, где постараемся поддерживать все основные функциональные возможности, которые сейчас поддерживают такие приложения. Разберём, для чего они нужны и как их следует проектировать.',
        'Создадим приложение, в котором сможем потренировать скорость печатания на разных раскладках и для текста разной скорости.',
        'Реализуем приложение для тренировки реакции, которое будет работать по принципу жизненного цикла маркеров, реагируя на которые мы сможем проанализировать насколько вы были быстры. Сделаем так, чтобы маркеры можно было настраивать: от их цвета и формы до способа появления и выделяемого времени на реакцию.',
        'Напишем свободный калькулятор, в который можно будет задать математическое выражение. Калькулятор будет принимать на вход строку типа (5 + 2) * 9, и следом будет возвращать результат. Мы реализуем две версии такого калькулятора: первая реализация будет базироваться на лексическом анализе и генерации AST, который после мы будем рекурсивно проходить; вторую версию же мы реализуем с помощью обратной польской нотации.',
        'Создадим свой собственный текстовый редактор, а также введем сохранение написанного в качестве файла под нашим особым форматом. Наш редактор сможет принимать этот формат и парсить, из-за чего мы сможем просматривать и редактировать сохранённые файлы.',
      ]
      return tooltips[el]
    },
  }
}
</script>