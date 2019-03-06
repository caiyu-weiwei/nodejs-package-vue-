<template>
  <div class="switch-swapper">
    <input
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
      @change="handleChange"
    >
  </div>
</template>

<script>
  export default {
    name: 'cySwitch',
    data() {
      return {}
    },
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      checked: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleChange ($event) {
        this.$emit('change', $event.target.checked)
      }
    }
  }
</script>

<style scoped>

</style>