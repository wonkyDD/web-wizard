# tab-manager

## V1

- [x] ttvlol 껐다 켜기
- [x] 시계 애니메이션
- [x] 도메인이 바뀔경우 manifest.json을 ott.js로 처리
- [x] 쿠키삭제하는 기능
- [x] ott -> extension으로 이름 변경
- [x] `content.js`에다가 내 id, password 적지않는 방법

## V2

- [ ] react + typescript + vite + shadcn/ui로 migration
- [ ] popup ui 개선
- [ ] [ky](https://github.com/sindresorhus/ky)로 fetch
- [ ] 오픈소스화
  - [ ] module을 간단히 개발해서 일종의 슈퍼앱이 될 수 있도록 (dc-refresher 처럼)
- [ ] 배포


### module들 사례

- [ ] tabs.group & tabGroup 기능 추가
  - https://developer.chrome.com/docs/extensions/reference/tabGroups/
  - https://developer.chrome.com/docs/extensions/reference/tabs/#method-group
- [ ] git gall에 fetch(ky사용)날려서 글 업데이트 없다면 twitter로 리다이렉팅
  - [ ] 애초에 팝업 열었을때 업데이트 몇개나 됐는지 알 수 있다면 좋을 듯
- [ ] bitwarden-password generator 기능 추가
- [ ] [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)을 화면녹화후 영상 자르기
- [ ] `twitch.content.(js|ts)` 구현
- [ ] <span style="color: yellow; background-color: black">BUG</span> prompt 복사하려고 w를 눌렀을때 클립보드로 안넘어오는 경우가 있음
- [ ] chrome.tabs.update로 window.location.href 방식 전부 대체
- chatgpt 관련 (maxai 참고해서 프롬프트 템플릿 가져오기)
  - url읽어서 chatgpt전용 popup ui
  - 단축키매핑이 ui별로 다시 이루어져야함
  - 단축키별로 prompt와 매핑됨
  - 단축키 클릭시, 클립보드 읽어서 prompt와 합친거를 input box에 집어넣고 실행
  - jailbreak 관련


<!-- - ship.txt에 대한 관리 (file:/// 으로 permission 얻어서 해결할까? ) -->
  <!-- - 백업 문제 (사라질 수가 있음) -->
  <!-- - 링크가 삭제되는 경우 -->
  <!-- - 다른 url인데 code가 겹쳐버리는 경우 -->
  <!-- - 한 사이트에서 재생이 안될때 다른 사이트로 가거나 검색을 하는 플로우 -->
  <!-- - 현재 링크에 대한 crud -->
<!-- - 도메인 별로 if-else를 걸어서 실행되는 content script파트를 가를 수 있나? -->
<!-- - 도메인 별로 쿠키/히스토리 삭제 기능 -->
<!-- - 시간표 기반으로 background에서 알림보내기 -->
<!-- - 성적표 생성기 -->
<!-- - 시간표 (timeline) 집어넣기 -->
<!-- - mac에서 window+v와 같은 것을 구현 (크롬 익스텐션 형태가 아닐 수도 있음) -->

<br>

## Thanks

- [icon](https://www.flaticon.com/free-icon/tabs_5515335?term=tab&related_id=5515335)
- [icon-edit](https://www.photopea.com/)
