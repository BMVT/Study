<template>
  <div :class="`js-item js-chapter chapter animate__animated animate__rotateIn chapter-${getNum(i+1)}`" :data-index="getNum(i+1)">
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
      <img :class="{ float: i === 2 }" v-if="i < 5" :src="require(`@/assets/images/program/chapter-${getNum(i+1)}.png`)"
        :srcset="require(`@/assets/images/program/chapter-${getNum(i+1)}@2x.png`) + ' 2x'" :width="item.size.width" :height="item.size.height">
      <img :class="{ float: i === 5 || i === 9 }" v-else :src="require(`@/assets/images/program/${i+1}.svg`)" :width="item.size.width" :height="item.size.height">
    </div>
    <small class="number element delay-0">{{ getNum(i+1) }}</small>
    <h3 class="section-title element delay-1">{{ item.title }}</h3>
    <div class="description element delay-2">
      <p>{{ item.text_1 }}</p>
      <p>{{ item.text_2 }}</p>
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
      <li class="element" v-for="(element, el) in item.elements" :key="el">
        <span class="lesson-number">{{ getNum(el+1) }}</span>
        <span v-if="element.tooltip" class="lesson-title" v-tippy :content="element.tooltip">{{ element.text }}</span>
        <span v-else class="lesson-title">{{ element.text }}</span>
        <span class="lesson-duration">{{ element.duration }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['i', 'item'],
  computed: {
    num() {
      return this.i < 10 ? '0'+this.i : this.i
    },
    description() {
      return `${this.item.elements.length} ${this.numWord(this.item.elements.length, ['урок', 'урока', 'уроков'])} — 9h 14mn`
    },
  },
  methods: {
    getNum(i) {
      return i < 10 ? '0'+i : i
    },
    numWord(value, words) {
      value = Math.abs(value) % 100
      const num = value % 10
      if (value > 10 && value < 20) return words[2]
      if (num > 1 && num < 5) return words[1]
      if (num == 1) return words[0]
      return words[2]
    }
  }
}
</script>