function calculateMatchScore(resumeText, jobDescription) {
  if (!resumeText) return 0;

  const resumeWords = resumeText.toLowerCase().split(/\W+/);
  const jobWords = jobDescription.toLowerCase().split(/\W+/);

  const commonWords = resumeWords.filter(
    (word) => jobWords.includes(word) && word.length > 3
  );

  return Math.min(
    Math.round((commonWords.length / jobWords.length) * 100),
    100
  );
}

module.exports = { calculateMatchScore };

