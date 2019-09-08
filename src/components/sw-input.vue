<template lang="pug">
.sw-input-container
  input.sw-input(
    @change="$emit('change', $event.target.value)"
    type="text"
    placeholder="Введите запрос"
    autofocus
  )
  slot(name="append")
    button.sw-append(
      type="submit"
      )
      img(src="/icons/magnify.svg")
</template>

<script>
export default {
  name: 'sw-input',
};
</script>

<style lang="scss" scoped>
.sw-input-container {
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
  margin-bottom: 20px;
}
.sw-input {
  flex: 1 1 auto;
  border-right-width: 0;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 10px;
  &:focus,
  &:active {
    outline: none;
  }
}
.sw-append {
  background-color: green;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  &:focus,
  &:active {
    outline: none;
  }
}
</style>
