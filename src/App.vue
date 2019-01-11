<template>
  <div id="app">
    <message-form
      :username="username"
      :usernameError="usernameError"
      :password="password"
      :passwordError="passwordError"
      :message="message"
      :messageError="messageError"
      :isEditting="isEditting"
      :onChange="onInputChange"
      :onSubmit="onSubmit"
      :onCancel="onEditCancel"
    ></message-form>
    <message-list
      :messageList="messageList"
      :onEditClick="onEditClick"
      :onDeleteClick="onDeleteClick"
    ></message-list>
    <custom-modal
      :isOpen="isModalOpen"
      :variation="modalVariation"
      :message="modalMessage"
      :onConfirm="modalVariation === 'passwordPrompt' ? onDeleteConfirm : resetModal"
      :onCancel="resetModal"
    ></custom-modal>
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
      username: '',
      usernameError: '',
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
      this.username = '';
      this.usernameError = '';
      this.password = '';
      this.passwordError = '';
      this.message = '';
      this.messageError = '';
      this.isEditting = false;
      this.selectedIndex = null;
      document.getElementById('username').focus();
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
      const { username, password, message, isEditting, selectedIndex } = this;
      let isValid = true;

      /** validation */
      if (!username) {
        this.usernameError = '이름을 입력하세요.';
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
          const editted = {
            username,
            password,
            message,
            createdAt: selectedItem.createdAt
          };
          this.messageList.splice(selectedIndex, 1, editted);
          this.resetForm();
        // when passwords wrong
        } else {
          this.openModal('alert', '비밀번호가 다릅니다.');
        }

      /** NEW */
      } else {
        this.messageList.unshift({
          username,
          password,
          message,
          createdAt: new Date()
        });
        this.resetForm();
      }
    },

    onEditCancel(e) {
      e.preventDefault();
      this.resetForm();
    },

    onEditClick(index) {
      const { username, message } = this.messageList[index];
      this.username = username;
      this.message = message;
      this.isEditting = true;
      this.selectedIndex = index;
      document.getElementById('username').focus();
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
