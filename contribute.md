# 1

```tsx
// app.test.tsx
import { render } from '@testing-library/react';

// 위의 것을 아래와 같이 변경해야
// screen not found in @testing-library/react라는 eslint 경고가 안뜸

```

---

# 2
.prettierignore에 
`pnpm-lock.yaml` 추가

---

# 3

package.json 커맨드에서 
`"lint:fix": "pnpm lint -- --fix",` 
이거 `--` 하나 더써있는 거 오류 아닌지?

---

# 4


