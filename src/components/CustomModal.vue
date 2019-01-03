<template>
  <div
    class="modal-bg"
    v-bind:class="{ open: isOpen }"
  >
    <div
      class="modal"
      v-bind:class="{ open: isOpen }"
    >
      <p class="modal__message">
        {{ message }}
      </p>
      <input
        class="modal__input"
        type="password"
        v-if="variation === 'passwordPrompt'"
        v-model="password"
      >
      <div class="modal__button">
        <button v-on:click="onConfirmClick">
          확인
        </button>
        <button
          class="cancel"
          v-if="variation === 'passwordPrompt'"
          v-on:click="onCancelClick"
        >
          취소
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-modal',

  props: {
    isOpen: Boolean,
    variation: String,
    message: String,
    onConfirm: Function,
    onCancel: Function,
  },

  data() {
    return {
      password: ''
    }
  },

  methods: {
    onConfirmClick() {
      this.onConfirm(this.password);
      this.password = '';
    },

    onCancelClick() {
      this.onCancel();
      this.password = '';
    }
  },
}
</script>

<style scoped>
.modal-bg {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 0;
  display: flex;
  align-items: flex-start;
}

.modal-bg.open {
  z-index: 9;
  opacity: 1;
}

.modal {
  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  width: 90%;
  max-width: 300px;
  margin: 5rem auto;
  padding: 1rem;
  transform: translateY(-80vh);
  display: flex;
  flex-direction: column;
}

.modal.open {
  transform: translateY(0);
}

.modal__message {
  margin: 0;
  margin-bottom: 0.5rem;
}

.modal__input {
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  margin-bottom: 0.5rem;
}

.modal__input:hover,
.modal__input:focus {
  border-color: #777;
}

.modal__button {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.modal__button button {
  border: 1px solid darkblue;
  outline: none;
  background: darkblue;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
}

.modal__button button:last-child {
  margin: 0;
}

.modal__button button.cancel {
  border-color: #555;
  background: #555;
}

.modal__button button:hover,
.modal__button button:focus {
  background: #fff;
  color: darkblue;
}

.modal__button button.cancel:hover,
.modal__button button.cancel:focus {
  background: #fff;
  color: #555;
}
</style>

