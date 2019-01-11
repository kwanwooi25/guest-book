<template>
  <div :class="{ error: error !== '', textarea: type === 'textarea' }">
    <label v-if="label" :for="id">
      {{ label }}
    </label>
    <textarea
      v-if="type == 'textarea'"
      :id="id"
      :name="id"
      :value="value"
      @keyup="onChange"
    />
    <input
      v-else
      :id="id"
      :name="id"
      :type="type"
      :value="value"
      @keyup="onChange"
    >
    <p v-if="error !== ''">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'custom-input',
  props: {
    id: String,
    type: String,
    label: String,
    value: String,
    error: String,
    onChange: Function,
  }
}
</script>

<style scoped>
div {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5rem;
}

label {
  width: 20%;
}

div.error label {
  color: tomato;
}

input,
textarea {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
}

input {
  max-width: 80%;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  border-color: #777;
}

div.error input,
div.error textarea {
  border-color: tomato;
}

p {
  color: tomato;
  font-size: 0.8rem;
  margin: 0;
  margin-top: 0.25rem;
  width: 100%;
  text-align: right;
}

@media (min-width: 600px) {
  div {
    width: 50%;
  }

  div.textarea {
    width: 100%;
  }
}
</style>
