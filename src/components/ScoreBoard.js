const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board">
      <h1>
        Your score: <span>{score}</span>
      </h1>
    </div>
  );
};

export default ScoreBoard;
