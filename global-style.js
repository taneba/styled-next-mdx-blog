import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export default createGlobalStyle`
${styledNormalize}

/* custom global styles can be written here  */
body {
  font-family:  -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Arial, "メイリオ", Meiryo, sans-serif;
  line-height: 1.5;
  color: #555;
}
`
