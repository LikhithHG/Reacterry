export const reverseSentence = (sentence) => {
    // Write your code here
    const words = sentence.split(' ');
    const reversedWords = words.reverse();
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
  }