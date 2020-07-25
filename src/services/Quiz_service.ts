export const getQuizDetails = async (totalQuestions: number, level: string) => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`
  );

  const { results } = await response.json();
  return results;
};
