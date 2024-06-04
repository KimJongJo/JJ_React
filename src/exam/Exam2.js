// Component 예제 2

import { render } from "@testing-library/react";
import { useState } from "react";

// 함수형 컴포넌트
function Exam2() {
  // 함수형 컴포넌트에서 상태를 사용하는 방법
  const [name, setname] = useState("김종조");

  const handleClick = () => {
    setname("홍길동");
  };

  return (
    // 함수형 컴포넌트는 render() 함수 제외하고 바로 return 작성하면 된다
    <div>
      <h1>Hello, {name}</h1>
      <button onClick={handleClick}>이름 변경</button>
    </div>
  );
}

export default Exam2; // 컴포넌트 내보내기
