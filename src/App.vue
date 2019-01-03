<template>
  <div id="app">
    <MessageForm
      v-bind:name="name"
      v-bind:nameError="nameError"
      v-bind:password="password"
      v-bind:passwordError="passwordError"
      v-bind:message="message"
      v-bind:messageError="messageError"
      v-bind:isEditting="isEditting"
      v-bind:onChange="onInputChange"
      v-bind:onSubmit="onSubmit"
      v-bind:onCancel="onEditCancel"
    ></MessageForm>
    <MessageList
      v-bind:messageList="messageList"
      v-bind:onEditClick="onEditClick"
      v-bind:onDeleteClick="onDeleteClick"
    ></MessageList>
    <CustomModal
      v-bind:isOpen="isModalOpen"
      v-bind:variation="modalVariation"
      v-bind:message="modalMessage"
      v-bind:onConfirm="modalVariation === 'passwordPrompt' ? onDeleteConfirm : resetModal"
      v-bind:onCancel="resetModal"
    ></CustomModal>
  </div>
</template>

<script>
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import CustomModal from './components/CustomModal';

export default {
  name: 'app',

  components: {
    MessageForm,
    MessageList,
    CustomModal,
  },

  data() {
    return {
      name: '',
      nameError: '',
      password: '',
      passwordError: '',
      message: '',
      messageError: '',
      messageList: [],
      isEditting: false,
      selectedIndex: null,
      isModalOpen: false,
      modalVariation: '',
      modalMessage: '',
    }
  },

  methods: {
    resetForm() {
      this.name = '';
      this.nameError = '';
      this.password = '';
      this.passwordError = '';
      this.message = '';
      this.messageError = '';
      this.isEditting = false;
      this.selectedIndex = null;
      document.getElementById('name').focus();
    },

    resetModal() {
      this.isModalOpen = false;
      this.modalVariation = '';
      this.modalMessage = '';
    },

    openModal(variation, message) {
      this.isModalOpen = true;
      this.modalVariation = variation;
      this.modalMessage = message;
    },

    onInputChange(e) {
      const { name, value } = e.target;
      this[name] = value;
      if (value) {
        this[`${name}Error`] = '';
      }
    },

    onSubmit(e) {
      e.preventDefault();
      const { name, password, message, isEditting, selectedIndex } = this;
      let isValid = true;

      /** validation */
      if (!name) {
        this.nameError = '이름을 입력하세요.';
        isValid = isValid && false;
      }
      if (!password) {
        this.passwordError = '비밀번호를 입력하세요.';
        isValid = isValid && false;
      }
      if (!message) {
        this.messageError = '메시지를 입력하세요.';
        isValid = isValid && false;
      }
      
      /** Terminate if validation fails */
      if (!isValid) return;

      /** EDIT */
      if (isEditting) {
        const selectedItem = this.messageList[selectedIndex];

        // when passwords match
        if (selectedItem.password === password) {
          const editted = { name, password, message, created: selectedItem.created };
          this.messageList.splice(selectedIndex, 1, editted);
          this.resetForm();
        // when passwords wrong
        } else {
          this.openModal('alert', '비밀번호가 다릅니다.');
        }

      /** NEW */
      } else {
        this.messageList.unshift({ name, password, message, created: new Date() });
        this.resetForm();
      }
    },

    onEditCancel(e) {
      e.preventDefault();
      this.resetForm();
    },

    onEditClick(index) {
      const { name, message } = this.messageList[index];
      this.name = name;
      this.message = message;
      this.isEditting = true;
      this.selectedIndex = index;
      document.getElementById('name').focus();
    },

    onDeleteClick(index) {
      this.selectedIndex = index;
      this.openModal('passwordPrompt', '비밀번호를 입력하세요.');
    },

    onDeleteConfirm(password) {
      if (password === undefined) return;

      const selectedItem = this.messageList[this.selectedIndex];
      if (selectedItem.password === password) {
        this.messageList.splice(this.selectedIndex, 1);
        this.resetForm();
        this.resetModal();
      } else {
        this.openModal('alert', '비밀번호가 다릅니다.');
      }
    },
  },
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  transition: 0.2s;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
