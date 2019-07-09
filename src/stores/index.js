import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: (() => {
      return require('../assets/json/question.json')
    })(),
    supples: (() => {
      return require('../assets/json/supple.json')
    })(),
    questionIndex: 0,
    selectedAnswer: [],
    pushNext: false
  },

  mutations: {
    initState: state => {
      state.questionIndex = 0
      state.selectedAnswer = []
    },
    prevPage: state => {
      state.pushNext = false
      state.questionIndex -= 1
    },
    nextPage: state => {
      state.pushNext = true
      state.questionIndex += 1
    },
    setAnswer: (state, index) => {
      if (state.selectedAnswer[state.questionIndex] === index) {
        state.selectedAnswer.splice(state.questionIndex, 1, undefined)
      } else {
        state.selectedAnswer.splice(state.questionIndex, 1, index)
      }
    }
  },

  getters: {
    getCurrentQuestion: state => {
      return state.questions.filter(question => question.id === state.questionIndex)[0]
    },
    getQuestionLength: state => {
      return state.questions.length
    },
    isSelected: state => index => {
      return state.selectedAnswer[state.questionIndex] === index
    },
    isAnySelected: state => {
      return state.selectedAnswer[state.questionIndex] != null
    },
    canPrev: state => {
      return state.questionIndex > 0
    },
    canNext: state => {
      return state.questionIndex < state.questions.length - 1
    },
    toRight: state => {
      return state.pushNext
    },
    getResult: state => {
      // Some Algorithm
      return state.supples
    }
  },

  plugins: [createPersistedState({ storage: window.sessionStorage })]
})
