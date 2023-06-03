import ReactDOM from 'react-dom/client'

// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from '../src/01-useState/CounterWithCustomHook'
// import {HooksApp} from './HookApp'

import './index.css'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <FormWithCustomHook />
  // </React.StrictMode>
)
