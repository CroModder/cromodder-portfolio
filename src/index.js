// Import main SCSS for webpack compilation
import './styles/main.scss'

// Import all JS lib for webpack compilation
import './scripts/lib'

// Import your custom function
import {
  navbarFixedTopAnimation,
  scrollRevelation,
  navActivePage
} from './scripts/main'

// Import all assets for webpack compilation
function importAll (r) {
  return r.keys().map(r)
}
importAll(require.context('./assets', true, /\.(png|jpe?g|svg|pdf)$/))

// Declare which function are accessible to the browser
Object.assign(window, {
  navbarFixedTopAnimation,
  scrollRevelation,
  navActivePage
})
