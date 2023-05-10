function GoalItem({ goal }) {
  return (
    <div>
      <div>{new Date(goal.createdAt).toLocaleDateString("en-US")}</div>
      <h2>{goal.text}</h2>
    </div>
  );
}

export default GoalItem;
