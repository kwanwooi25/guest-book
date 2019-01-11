<template>
  <li>
    <p>{{ message }}</p>
    <div>
      <span class="username">
        {{ username }}
      </span>
      <span class="date">
        {{ date | formatDate }}
      </span>
      <custom-button-group class="button-group">
        <custom-button
          label="수정"
          :onClick="() => { onEditClick(index) }"
        ></custom-button>
        <custom-button
          label="삭제"
          cancel
          :onClick="() => { onDeleteClick(index) }"
        ></custom-button>
      </custom-button-group>
    </div>
  </li>
</template>

<script>
import CustomButtonGroup from './CustomButtonGroup';
import CustomButton from './CustomButton';

export default {
  name: 'message-list-item',

  components: {
    CustomButtonGroup,
    CustomButton,
  },

  props: {
    index: Number,
    message: String,
    username: String,
    date: Date,
    onEditClick: Function,
    onDeleteClick: Function,
  }
}
</script>

<style scoped>
li {
  border-bottom: 1px solid #dedede;
  padding: 1rem;
}

li:last-child {
  border: none;
}

p {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 0.5rem;
  word-wrap: break-word;
  white-space: pre;
}

div {
  align-items: baseline;
  display: flex;
  justify-content: space-between;
}

.username {
  padding: 0.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 30%;
}

.date {
  color: #555;
  font-size: 0.75rem;
  padding: 0.25rem;
  width: 30%;
}

.button-group {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 0.25rem;
  width: 40%;
}
</style>