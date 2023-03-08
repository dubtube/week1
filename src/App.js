
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className='nav'>
        <div>로고</div>
        <div>Sign in</div>
      </div>
      
      <div className='sec1'>
        <h1>유튜브 자막생성기</h1>
        <div className='logoimg'>
          <img src="/laptop.jpg" alt="logo"/>
        </div>
        <h2> 서비스 개요</h2>
        <p>조카소는 인공지능 기반의 빠르고 정확한 유튜브 영상 자막 생성 서비스입니다. AI가 만든 자막이라고 믿을 수 없을 정도로 정교한 자막 및 번역 자막을 제공합니다. 유튜브 링크만 있으면 순식간에 영상 자막이 만들어지는 놀라운 경험을 해보세요!</p>
        <h2>자막 생성 방식</h2>
        <p>OpenAI의 whisper모델을 활용해 유튜브 영상의 음성을 분석하고, 분석한 음성으로부터 자막 파일을 생성합니다.</p>
        <h2>소요 시간</h2>
        <p>영상 길이 1분마다 대략 30초의 시간이 소요됩니다. 10분짜리 영상이라면 대략 5분의 시간이 소요됩니다. 사용량이 많아 서버에 부하가 있을 경우 조금 더 걸릴 수 있습니다.</p>
      
      </div>

      <div className='footer'>
        <h3>Copyright ⓒ Codemafia. All Rights Reserved</h3>
        <p>사업자등록번호: 414-81-08646 | 대표자명: 조동근 | 상호명: 코드마피아</p>
        <p>사업장 주소: 경기도 파주시 경의로 1114, 4층 405호(야당동, 에펠타워)</p>
        <p>통신판매업 신고번호 : 제2023-경기파주-0139호</p>
        <p>문의: help@codmafia.biz</p>
        <p>조카소 기본약관</p>

      </div>
      
    </div>
  );
}

export default App;
