/* eslint-disable no-multiple-empty-lines */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase'
import { firebase , FieldValue } from './lib/firebase'

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase , FieldValue }}>
        <App />
    </FirebaseContext.Provider>, document.getElementById('root')
    );

// client side rendered app : react (cra)
// -> database which is Firebase
// -> react-loading-skeleton
// -> tailwind

// architecture
// -> src
// -> components
// -> constants
// -> context
// -> helpers
// -> hooks
// -> lib(firebase is here)
// -> services (firebase functions in here)
// -> styles (tailwind folder (app/tailwind))
