import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import WriterPage from './pages/WriterPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NotyPage from './pages/NotyPage';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>Movy Noty</title>
      </Helmet>
      <Route component={PostListPage} path={['/@:username', '/list']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WriterPage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={NotyPage} path="/" exact/>
    </>
  );
}

export default App;
