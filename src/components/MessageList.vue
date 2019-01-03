<template>
  <ul class="message-list" v-if="messageList.length !== 0">
    <li
      v-for="(messageItem, index) in messageList"
      :key="index"
      class="message-list__item"
    >
      <p class="message-list__item__message">{{ messageItem.message }}</p>
      <div class="message-list__item__row">
        <span class="message-list__item__name">
          {{ messageItem.name }}
        </span>
        <span class="message-list__item__date">
          {{ messageItem.created | formatDate }}
        </span>
        <div class="message-list__item__button">
          <button v-on:click="onEditClick(index)">
            수정
          </button>
          <button class="cancel" v-on:click="onDeleteClick(index)">
            삭제
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'message-list',

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

.message-list__item {
  border-bottom: 1px solid #dedede;
  padding: 1rem;
}

.message-list__item:last-child {
  border: none;
}

.message-list__item__message {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 0.5rem;
  word-wrap: break-word;
}

.message-list__item__row {
  align-items: baseline;
  display: flex;
  justify-content: space-between;
}

.message-list__item__name {
  padding: 0.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 30%;
}

.message-list__item__date {
  color: #555;
  font-size: 0.75rem;
  padding: 0.25rem;
  width: 30%;
}

.message-list__item__button {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 0.25rem;
  width: 40%;
}

.message-list__item__button button {
  border: 1px solid darkblue;
  outline: none;
  background: darkblue;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1rem;
  margin-left: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
}

.message-list__item__button button.cancel {
  border-color: #555;
  background: #555;
}

.message-list__item__button button:hover,
.message-list__item__button button:focus {
  background: #fff;
  color: darkblue;
}

.message-list__item__button button.cancel:hover,
.message-list__item__button button.cancel:focus {
  background: #fff;
  color: #555;
}
</style>
