<template>
  <button
    class="button"
    :class="{cancel}"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'custom-button',

  props: {
    label: String,
    cancel: Boolean,
    onClick: Function,
  },
}
</script>

<style scoped>
button {
  border: 1px solid darkblue;
  outline: none;
  background: darkblue;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1rem;
  margin: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  min-width: 5rem;
}

button.cancel {
  border-color: #555;
  background: #555;
}

button:hover,
button:focus {
  background: #fff;
  color: darkblue;
}

button.cancel:hover,
button.cancel:focus {
  background: #fff;
  color: #555;
}
</style>