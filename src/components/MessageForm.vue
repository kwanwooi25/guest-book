<template>
  <form class="message-form">
    <div
      class="message-form__input"
      v-bind:class="{ error: nameError !== '' }"
    >
      <label for="name">이름</label>
      <input
        id="name"
        name="name"
        type="text"
        v-bind:value="name"
        v-on:keyup="onChange"
      >
      <p v-if="nameError !== ''">
        {{ nameError }}
      </p>
    </div>
    <div
      class="message-form__input"
      v-bind:class="{ error: passwordError !== '' }"
    >
      <label for="password">비밀번호</label>
      <input
        id="password"
        name="password"
        type="password"
        v-bind:value="password"
        v-on:keyup="onChange"
      >
      <p v-if="passwordError !== ''">
        {{ passwordError }}
      </p>
    </div>
    <div
      class="message-form__textarea"
      v-bind:class="{ error: messageError !== '' }"
    >
      <textarea
        id="message"
        name="message"
        type="text"
        v-bind:value="message"
        v-on:keyup="onChange"
      />
      <p v-if="messageError !== ''">
        {{ messageError }}
      </p>
    </div>
    <div class="message-form__button">
      <button v-on:click="onSubmit">
        {{ isEditting ? '수정' : '등록하기' }}
      </button>
      <button
        class="cancel"
        v-if="isEditting"
        v-on:click="onCancel"
      >
        취소
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'message-form',

  props: {
    name: String,
    nameError: String,
    password: String,
    passwordError: String,
    message: String,
    messageError: String,
    isEditting: Boolean,
    onChange: Function,
    onSubmit: Function,
    onCancel: Function,
  }
}
</script>

<style scoped>
.message-form {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-width: 320px;
  max-width: 600px;
  margin: 0 auto;
}

.message-form__input,
.message-form__textarea {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5rem;
}

.message-form__input label {
  width: 20%;
}

.message-form__input.error label {
  color: tomato;
}

.message-form__input input,
.message-form__textarea textarea {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
}

.message-form__input input:hover,
.message-form__input input:focus,
.message-form__textarea textarea:hover,
.message-form__textarea textarea:focus {
  border-color: #777;
}

.message-form__input.error input,
.message-form__textarea.error textarea {
  border-color: tomato;
}

.message-form__input input {
  max-width: 80%;
}

.message-form__input p,
.message-form__textarea p {
  color: tomato;
  font-size: 0.8rem;
  margin: 0;
  margin-top: 0.25rem;
  width: 100%;
  text-align: right;
}

.message-form__button {
  display: flex;
  justify-content: center;
  width: 100%;
}

.message-form__button button {
  border: 1px solid darkblue;
  outline: none;
  background: darkblue;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1rem;
  margin: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  min-width: 10rem;
}

.message-form__button button.cancel {
  border-color: #555;
  background: #555;
}

.message-form__button button:hover,
.message-form__button button:focus {
  background: #fff;
  color: darkblue;
}

.message-form__button button.cancel:hover,
.message-form__button button.cancel:focus {
  background: #fff;
  color: #555;
}


@media (min-width: 600px) {
  .message-form__input {
    width: 50%;
  }
}

</style>