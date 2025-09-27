import react from 'react';
import reactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';

const root = reactDOM.createRoot(document.getElementById('root'));

root.render(
    <react.StrictMode>
        <App/>
    </react.StrictMode>
)