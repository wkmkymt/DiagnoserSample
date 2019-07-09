<template>
  <div class="diagnosis-box">
    <transition mode="out-in" :name="toRight ? 'right' : 'left'">
      <div
        v-if="getCurrentQuestion.id < getQuestionLength"
        :key="getCurrentQuestion.id"
        class="question-container"
      >
        <div class="question-box">
          <p class="Q-title">
            <span class="Q-icon">Q{{ getCurrentQuestion.id + 1 }}</span>
            {{ getCurrentQuestion.text }}
          </p>
        </div>

        <div class="answer-box">
          <ul>
            <li
              class="answer"
              :class="{ 'is-selected': isSelected(index) }"
              v-for="(answer, index) in getCurrentQuestion.answers"
              :key="answer.text"
              @click="setAnswer(index)"
            >
              {{ answer.text }}
            </li>
          </ul>
        </div>

        <nav class="btn-box">
          <div class="btn prev-btn">
            <a @click="prevPage" v-show="canPrev">戻る</a>
          </div>

          <div
            class="btn next-btn"
            :class="{ 'is-any-selected': isAnySelected, 'is-goal': !canNext }"
          >
            <router-link v-if="!canNext && isAnySelected" to="/result">結果へ</router-link>
            <a v-else @click="isAnySelected ? nextPage() : null">
              {{ canNext ? '次へ' : '結果へ' }}
            </a>
          </div>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getCurrentQuestion',
      'getQuestionLength',
      'isSelected',
      'isAnySelected',
      'canPrev',
      'canNext',
      'toRight'
    ])
  },

  methods: {
    ...mapMutations(['prevPage', 'nextPage', 'setAnswer'])
  }
}
</script>

<style scoped>
.diagnosis-box {
  position: relative;
  width: 100%;
  padding: 48px;
  border-radius: 15px;
  background: #ffffff;
  overflow: hidden;
}

.question-container {
  width: 100%;
}

.question-box .Q-title {
  color: #492c3d;
  font-size: 160%;
  text-align: center;
}

.question-box .Q-icon {
  margin-right: 12px;
  color: #e84a50;
}

.answer-box {
  flex-grow: 1;
  margin-top: 48px;
}

.answer-box .answer {
  width: 100%;
  margin: 24px auto;
  padding: 12px 0;
  background: #8ab3ad60;
  color: #492c3d;
  font-size: 120%;
  text-align: center;
  border-radius: 5em;
  transition: 0.2s All ease-in;
  cursor: pointer;
}

.answer-box .answer.is-selected {
  background: #e84a50;
  color: #ffffff;
}

.answer-box .answer:hover {
  box-shadow: 0px 4px 6px #666666;
}

.answer-box .answer:active {
  transform: scaleX(0.98);
}

.btn-box {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
}

.btn-box .btn {
  width: 20%;
}

.btn-box .btn > a {
  display: block;
  width: 100%;
  padding: 12px 0;
  border-radius: 5em;
  color: #ffffff;
  font-size: 120%;
  font-weight: 700;
  text-align: center;
  transition: ALl 0.2s ease-in;
}

.btn-box .next-btn > a {
  background: #cccccc;
  cursor: default;
}

.btn-box .next-btn.is-any-selected > a,
.btn-box .prev-btn > a {
  background: #378e8e;
  cursor: pointer;
}

.btn-box .next-btn.is-goal.is-any-selected > a {
  background: #e84a50;
}

.btn-box .next-btn.next-btn.is-any-selected > a:hover,
.btn-box .prev-btn > a:hover {
  box-shadow: 0px 4px 6px #666666;
}

.left-enter-active,
.right-enter-active {
  transition: all 0.4s ease 0s;
}

.left-leave-active,
.right-leave-active {
  transition: all 0.2s ease 0s;
}

.left-leave,
.left-enter-to,
.right-leave,
.right-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.left-enter,
.left-leave-to,
.right-enter,
.right-leave-to {
  opacity: 0;
}

.left-enter,
.right-leave-to {
  transform: translateX(-100%);
}

.left-leave-to,
.right-enter {
  transform: translateX(100%);
}

@media screen and (max-width: 420px) {
  .question-box .Q-title {
    font-size: 120%;
  }

  .btn-box .btn {
    width: 40%;
  }
}
</style>
