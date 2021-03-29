import helloGates from '../circuit-data/hello-gates.json'


export const initialState = {
  circuits: {
    helloGates,
  }
};


// export let initialState = {
//   banner,
//   helloGates,
//   vampires,
//   binaryNumbers,
//   adder1,
//   fullAdder,
//   adder3,
//   latch,
//   register,
//   calculator,
//   cpu1
// }



// // Map event types to handlers
// const services = {
//   [FETCH_PREDICTIONS_TRANSACTIONS]: fetchPredictionsAndTransactions,
//   [FETCH_RANK]: fetchRank,
//   [FETCH_QUESTION]: fetchQuestion,
//   [CLEAR_QUESTION]: clearQuestion,
//   [FETCH_QUESTIONS]: fetchQuestions,
//   [FETCH_LEADERBOARD]: fetchLeaderboard,
//   [FETCH_TOPICS]: fetchTopics,
//   [AUTHORIZE_USER]: authorizeUser,
//   [BUY_PREDICTION]: buyPrediction,
//   [SELL_PREDICTION]: sellPrediction,
//   [CREATE_POST]: createPost,
//   [EDIT_POST]: editPost,
//   [CREATE_QUESTION]: createQuestion,
//   [EDIT_QUESTION]: editQuestion,
//   [DELETE_POST]: deletePost,
//   [CHANGE_ROUTE]: changeRoute,
//   [FETCH_QUESTION_PRICES]: fetchQuestionPrices,
//   [FETCH_RANK]: fetchRank,
// };