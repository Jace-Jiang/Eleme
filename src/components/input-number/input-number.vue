<template>
  <div>
    <input
    type="text"
    :value="currentValue"
     @change="handleChange"
     @focus="focus"
     @blur="blur"
     @keydown="keyDown"
     />
    <button @click="handleDown" style="width:40px">-</button>
    <button @click="handleUp"  style="width:40px">+</button>
  </div>
</template>

<script>

export default {
  name: 'input-number',
  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentValue: this.value,
      focused: false,
      downDsiabled: false
    }
  },
  mounted() {
    this.updatedValue(this.value)
  },
  methods: {
    // 判断输入的是否为数字
    isValueNumber(value) {
      return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '')
    },
    updatedValue(val) {
      if (val > this.max) val = this.max
      if (val < this.min) val = this.min
      this.currentValue = val
    },
    handleDown(e) {
      if (this.currentValue <= this.min) {

      } else {
        this.currentValue -= this.step
      }
    },
    handleUp(e) {
      if (this.currentValue >= this.max) {

      } else {
        this.currentValue += this.step
      }
    },
    handleChange(event) {
      let val = event.target.value.trim()
      let max = this.max
      let min = this.min
      if (this.isValueNumber(val)) {
        val = Number(val)
        this.currentValue = val
        if (val > max) {
          this.currentValue = max
        } else if (val < min) {
          this.currentValue = min
        }
      } else {
        event.target.value = this.currentValue
      }
    },
    focus() {
      this.focused = true
    },
    blur() {
      this.focused = false
    },
    keyDown(e) {
      if (e.keyCode === 38) {
        e.preventDefault()
        this.handleUp(e)
      } else if (e.keyCode === 40) {
        e.preventDefault()
        this.handleDown(e)
      }
    }

  },
  watch: {
    currentValue(val) {
      this.$emit('input', val)
      this.$emit('on-change', val)
    },
    value(val) {
      this.updatedValue(val)
    }
  }
}

</script>
<style>
</style>
