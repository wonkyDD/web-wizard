# web-wizard

include all the web tools you need in one extension

## TODO

- 템플릿 sync
  - [x] [Enhance: Add web extension polyfill](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite/commit/09cce358c66e302b4e05963fcb7c0f3ffd32b065)
  - [ ] [chore/ Update packages](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite/commit/abe4ebfca0358f7de187dc6b91bdb336d296d14f)
- template 관련
  - [x] [twind invalid class](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite/issues/243) 이슈해결
  - [x] [계속 에러윈도우에 web-socket 끊어졌다고 경고뜨는 이슈]()  => 의도된 동작이라고 한다
- [x] [shadcn](https://ui.shadcn.com/docs/installation/manual) manual로 추가
    - [x] rollup 설정 때문에 함부로 `"@/*": ["./*"]` 를 추가해서 하면 안됨
    - [x] global.css 처리는 어떻게 할건지? => `@src/global.css`로 해결
    - [x] content-view가 안보임 => `@pages/content/index.ts`에서 import를 사용하지 않는다 (핫리로드 불가한 부분)
- [ ] 위의 사항들 다 완료되면 `vaknil-extension` 으로 새로운 레포 생성
