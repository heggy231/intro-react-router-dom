# Routing - react-router-dom for websites

```jsx
    <BrowserRouter>
    // App Component showing at /foo
      <Route component={App} path="/foo" /> 
    </BrowserRouter>

    <BrowserRouter>
    // App component showing at the Root /
      <Route component={App} path="/" exact/> 
    </BrowserRouter>
```

* remember for `path="/"` include `exact` attribute for Route does partial matching which causes all path to go to home (root).  Since all path start with `/`, it will match all routes.

- Next, `touch src/components/AddMovie.js`
  - `rafc` for boilerplate for arrow function

