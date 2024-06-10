// props 응용
// 전개 연산자 (...) : 객체 내부의 모든 값을 props로 전달하는 방법

import { useState } from "react";

// 부모
function Exam5() {
  const [userData, setUserData] = useState({ name: "김종조", age: 25 });

  // return <MyComponent name={userData.name} age={userData.age} />
  return <MyComponent {...userData} setUserData={setUserData} />;
}

// 자식
function MyComponent(props) {
  const { name, age, setUserData } = props;

  const oneYearLater = () => {
    setUserData({ name: "1살 더 먹은 김종조", age: 26 });
  };

  const content = `안녕하세요 저는 ${name} 이고, 나이는 ${age}세 입니다.`;
  return (
    <>
      <h3>{content}</h3>
      <button onClick={oneYearLater}>1년 후</button>
    </>
  );
}

export default Exam5;
