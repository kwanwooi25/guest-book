<template>
  <form>
    <custom-input
      v-for="input in inputs"
      :key="input.id"
      :id="input.id"
      :type="input.type"
      :label="input.label"
      :value="input.value"
      :error="input.error"
      :onChange="onChange"
    ></custom-input>
    <custom-button-group>
      <custom-button
        :label="isEditting ? '수정' : '등록하기'"
        :onClick="onSubmit"
      ></custom-button>
      <custom-button
        v-if="isEditting"
        label="취소"
        :onClick="onCancel"
        cancel
      ></custom-button>
    </custom-button-group>
  </form>
</template>

<script>
import CustomInput from './CustomInput';
import CustomButtonGroup from './CustomButtonGroup';
import CustomButton from './CustomButton';

export default {
  name: 'message-form',

  components: {
    CustomInput,
    CustomButtonGroup,
    CustomButton,
  },

  computed: {
    inputs() {
      return [
        {
          id: 'username',
          type: 'text',
          label: '이름',
          value: this.username,
          error: this.usernameError,
        },
        {
          id: 'password',
          type: 'password',
          label: '비밀번호',
          value: this.password,
          error: this.passwordError,
        },
        {
          id: 'message',
          type: 'textarea',
          value: this.message,
          error: this.messageError,
        }
      ]
    },
  },

  props: {
    username: String,
    usernameError: String,
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
form {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-width: 320px;
  max-width: 600px;
  margin: 0 auto;
}
</style>