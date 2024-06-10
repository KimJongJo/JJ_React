// State & Props

import { useState } from "react";

// Props Dilling : 상태 내리꽂기
// props를 통해 데이터를 전달할 때, 자식 컴포넌트에서 필요하지 않은 props를 계속해서 전달하는 행위
// -> 코드의 가독성 및 유지보수성을 떨어뜨림..
// -> React Context API 나 Redux 같은 상태관리 라이브러리를 사용함

// Exam4 > Child1 > Child2 > Child3 > MyComponent 처럼 부모자식 관계가 연결되어 있을 때
// Exam4의 상태값을 Mycomponent에서 사용해야 한다면

// 부모 컴포넌트
function Exam4() {
  const [name, setName] = useState("My nickname is");

  const handClick = () => {
    setName("giveMeTheBell");
  };

  return (
    <>
      <Child1 name={name} />
      <button onClick={handClick}>별명 보기</button>
    </>
  );
}

function Child1(props) {
  return <Child2 name={props.name} />;
}

function Child2(props) {
  return <Child3 name={props.name} />;
}

function Child3(props) {
  return <MyComponent name={props.name} />;
}

// 자식 컴포넌트
function MyComponent(props) {
  // props는 Exam4에서부터 내리꽂기를 통해 전달받은 부모의 상태값
  return <h1>{props.name}</h1>;
}

export default Exam4;
