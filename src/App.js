import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserContextProvider } from './context/user-context';

const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <UserContextProvider>
            <div className="bg-yellow-500">
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </div>
          </UserContextProvider>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
