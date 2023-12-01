import React, { useState } from "react";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finished the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    //--아래처럼 하는게 아주 좋은 방법은 아니다. 만약 버튼을 계속 누르면
    //전체를 계속 다시 랜더링해야하서 상태 업데이트가 지연될 수 있다.
    //setCourseGoals(courseGoals.concat(newGoal));
    //--새로운 상태값을 전달하는게 아니라 함수를 전달해서 상태를 업데이트 할 수 있다!
    //prevCourseGoals로 직전의 최신 상태를 받고 새로운 상태 스냅샷을 반환.
    //prevCourseGoals에 새 목표를 연결.
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  // 배열이 업데이트가 되면 아래의 데이터가 출력되는 것
  return (
    <div className="course-goal">
      <h2>Course Goals!!!</h2>
      {/* (1)데이터를 바로 전달하지 않고 props를 통해 함수를 전달 */}
      <NewGoal onAddGoal={addNewGoalHandler} />
      {/* (2)자식컴포넌트가 그 함수를 호출 (이벤트가 진행 된) */}
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
