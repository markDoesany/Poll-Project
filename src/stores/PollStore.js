import { writable } from 'svelte/store'

const PollStore = writable([
  {
    id: 1,
    question: 'Are You Gay?',
    answerA: 'Yes, I am not',
    answerB: 'No, I am',
    votesA: 1,
    votesB: 2,
  },
])

export default PollStore;

