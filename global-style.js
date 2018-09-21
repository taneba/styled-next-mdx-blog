import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export default createGlobalStyle`
${normalize()}

/* custom global styles can be written here  */
body {
  font-family:  -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Arial, "メイリオ", Meiryo, sans-serif;
  line-height: 1.5;
  color: #555;
}
`
