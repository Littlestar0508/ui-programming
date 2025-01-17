import React from "../lib/react.js";

/* -------------------------------------------------------------------------- */
/* Render Props & Higher-Order Component                                      */
/* -------------------------------------------------------------------------- */

export default function RenderPropsAndHOC() {
  return (
    <div className="RenderPropsAndHOC">
      <ReactClassComponent>
        {/* render props 패턴을 사용해 하위 컴포넌트에 dateInfo 정보를 공유합니다. */}
        {/* JSX === React.ReactElement */}
        {/* 꼭 자식인 children 속성(prop)이 JSX여야 할까? */}
        {/* 꼭 JSX일 필요는 없다. 그러면 JavaScript 객체 또는 함수 데이터는 자식이 될 수 없지만... */}
        {/* 만약 자식으로 전달된 함수가 실행되어 그 결과가 JSX를 반환한다면? 가능합니다! */}
        {
          /* render */ (/* 전달된 데이터 받기 가능 */ dateInfo: DateInfo) => {
            return <ReactFunctionComponent dateInfo={{ iso: dateInfo.iso, ko: dateInfo.ko }} />;
          }
        }
        {/* <ReactFunctionComponent dateInfo={{ iso: "", ko: "" }} /> */}
      </ReactClassComponent>
      <AnotherReactClassComponent />
    </div>
  );
}

// 클래스 컴포넌트 --------------------------------------------------------------------

class ReactClassComponent extends React.Component {
  // this.props지정
  props: {
    children: React.ReactNode;
  };

  render() {
    const dateInfo = getDateInfo();

    // render props 패턴을 사용해 dateInfo 정보를 children 컴포넌트에 전달하세요.
    return (
      <section>
        <h2>React 규칙 준수</h2>
        {this.props.children?.(dateInfo)}
      </section>
    );
  }
}

class AnotherReactClassComponent extends React.Component {
  props: {
    children?: React.ReactNode;
  };

  render() {
    const { children } = this.props;

    return (
      <section>
        <h2>고차 컴포넌트를 사용해 컴포넌트 간 로직 공유</h2>
        {children}
      </section>
    );
  }
}

// 함수 컴포넌트 --------------------------------------------------------------------

function ReactFunctionComponent({ dateInfo }: { dateInfo: DateInfo }) {
  return (
    <>
      <p>규칙을 준수하지 않으면 앱에 문제가 발생합니다.</p>
      <footer>{dateInfo && <time dateTime={dateInfo.iso}>{dateInfo.ko}</time>}</footer>
    </>
  );
}

// 일반 함수 -----------------------------------------------------------------------

function getDateInfo(): DateInfo {
  const d = new Date();
  const [year, month, date] = d.toLocaleDateString().split(".");
  return {
    iso: d.toISOString(),
    ko: `${year}년 ${month.trim()}월 ${date.trim()}일`,
  };
}

interface DateInfo {
  iso: string;
  ko: string;
}
