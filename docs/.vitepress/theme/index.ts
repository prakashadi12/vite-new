import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import './custom.css'

export default {
  ...DefaultTheme,
  setup() {
    onMounted(() => {
      window.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return

        const modal = document.querySelector('.DocSearch-Modal')
        if (!modal) return

        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusableElements.length === 0) return

        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      })
    })
  },
  enhanceApp({ app, router, siteData }) {
    // existing app enhancement logic
  }
}