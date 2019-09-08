<template lang="pug">
.sw-home
  .sw-task
    h1 Задание
    ul.sw-task__list
      li.sw-task__list-item Необходимо реализовать spa на vue.js, которое парсило бы любой источник
        |  изображений с открытым api - инстаграм, яндекс.картинки, и т.д. что угодно, что Вам
        |  больше нравится кроме unsplash.
      li.sw-task__list-item Приложение состоит из двух страниц - главная, на которой размещена
        |   информация о проекте, и вторая, на которой и отображаются изображения.
      li.sw-task__list-item Для навигации использовать vue-router.
      li.sw-task__list-item Хранение данные реализовать во vuex. Для парсинга использовать axios.
        |  Для сборки - webpack.
  .sw-task
    h1 Решение
    ul.sw-task__list
      li.sw-task__list-item В связи с тем, что задание очень простое, решено было не брать никаких
        |  фреймворков, кроме Vue.js. Хотя обычно я предпочитаю связку Nuxt.js + Vuetify.js.
      li.sw-task__list-item Адаптивка не реализована в связи с отсутствием требований в ТЗ.
      li.sw-task__list-item За основу взято API&nbsp;
        a(
          href="https://developers.google.com/custom-search/docs/overview"
          target="_blank"
          ) Google Custom Search
        | .
      li.sw-task__list-item Я использовала префикс 'sw' для классов и компонент.
        |  В том числе согласно&nbsp;
        a(
          href="https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended"
          target="_blank"
          ) этим
        |  рекомендациям.
      li.sw-task__list-item Кастомный input обычно входит в uikit проекта,
        |  поэтому он подключен общим комопонентом.
      li.sw-task__list-item Проект разворачивала с помощью vue-ui.
        |  Пакетный менеджер yarn, линтер airbnb.
      li.sw-task__list-item Несмотря на отсутствие особой нужды, используется динамическая загрузка
        |  компонента второй страницы.
      li.sw-task__list-item Pug, SCSS - для меня стандартные средства, в этом проекте они тоже
        |  использовались.
      li.sw-task__list-item Именование классов по&nbsp;
        a(
          href="https://en.bem.info/methodology/quick-start/"
          target="_blank"
          ) BEM - методологии
        |.
      li.sw-task__list-item На реализацию задачи ушло менее 1 рабочего дня.
        |  Я была незнакома с API Google Custom Search, а также много времени ушло на эксперименты
        |  с дизайном.
      li.sw-task__list-item API поддерживает некоторые дополнительные параметры парсинга,
        |  которые я не стала реализовывать, т.к. их нет в задании.
        |  При необходимости могу дополнить.

</template>

<style lang="scss" scoped>
.sw-task {
  &__list {
    text-align: left;
  }
  &__list-item {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
