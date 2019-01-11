<template>
  <ul class="message-list" v-if="messageList.length !== 0">
    <message-list-item
      v-for="(item, index) in messageList"
      :key="index"
      :index="index"
      :message="item.message"
      :username="item.username"
      :date="item.createdAt"
      :onEditClick="onEditClick"
      :onDeleteClick="onDeleteClick"
    ></message-list-item>
  </ul>
</template>

<script>
import MessageListItem from './MessageListItem';

export default {
  name: 'message-list',

  components: {
    MessageListItem,
  },

  props: {
    messageList: Array,
    onEditClick: Function,
    onDeleteClick: Function,
  },
}
</script>

<style scoped>
.message-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 1rem auto;
  padding: 0;
  width: 100%;
  min-width: 320px;
  max-width: 600px;
  overflow: auto;
  border-top: 2px solid #dedede;
  border-bottom: 2px solid #dedede;
}
</style>
