/**
 * - index.ts 부분은 save해도 핫리로드가 안됨
 * - import도 쓰면 안됨
 */
// import log from '@src/lib/log';
console.log('🚀 content loaded');

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 *
 * @todo
 * background 와 signal 주고받아서 turn/off 조정
 */
import('./components/Demo');

/**
 * @note
 * https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite/commit/f622df9260d6f5ad5c18a3da7b5a870decec8292
 */
// import('@pages/content/ui');
// import('@pages/content/injected');
