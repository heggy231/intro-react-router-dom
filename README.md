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

- create route (url that only shows addmovie component) for the new `AddMovie` component
  - inside index.js add Route component with component `AddMovie` with path `/add-movie`.
  - remember to import `AddMovie` component from `src/components/AddMovie.js` into App.js
  - finally, go to `http://localhost:3000/add-movie` to see AddMovie component!


- Next Goal: Create Header Footer base Layout and inserting props.children into the base layout Header and Footer.

```jsx
  // **** `props.children` is what are nested inside of BaseLayout *****
      <BrowserRouter>
      <BaseLayout>
        <Route component={App} path="/" exact />
        <Route component={AddMovie} path="/add-movie" />
      </BaseLayout>
    </BrowserRouter>

  // Then utilize Switch to insert props.children into the base layout Header and Footer
        <Switch>
          <Route component={App} path="/" exact />
          <Route component={AddMovie} path="/add-movie" />
        </Switch>
  
```

- Next goal: add nav menu to go to `/add-movie` and `/`

1. `touch src/components/Menu.js`
2. Add into `Menu` component inside of BaseLayout since BaseLayout wraps all the Route inside of `index.js`

```jsx
// index.js)
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
// ***** BaseLayout wraps all the Route inside of `index.js` *****
      <BaseLayout>
        <Switch>
          <Route component={App} path="/" exact />
          <Route component={AddMovie} path="/add-movie" />
        </Switch>
      </BaseLayout>
// ******************************
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// ********* BaseLayout component includes Menu component *********
const BaseLayout = (props) => {
  return (
    <>
// ***** Menu component is the navigation which is Header
      <Menu />
      <main>Main Content: {props.children}</main>
      <footer>BaseLayout Footer</footer>
    </>
  )
}
```

Q) Why we don't want SPA to refresh?

- Anything we store in **local state will be gone** when page refreshes.
- React is performant, all the page content is loaded when app begins.  Single page application.

## making header menu clickable nav link

```jsx
// inside Menu.js)
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div id="menu">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/add-movie">Add Movie</NavLink>
        </div>
      </div>
    </>
  );
};

// inside of index.js) *match what `path` here `to` nav link
  <Route component={App} path="/" exact />
  <Route component={AddMovie} path="/add-movie" />
```

## Goal: Breadcrumbs to go back to prev pg
- Best time to get the :movieId is when the page is loaded Therefore, useEffect when componentDidMount.

```jsx
// inside of MovieDetail.js
const MovieDetails = (props) => {
  // useEffect to get access to `:movieId`
  useEffect(() => {
    console.log('props', props);
    // props = { location: { pathname: "/movies/45" } 
    //           match: { params: { movieId: "45" } } }
  }, []);
```

```js
// closer look of props obj, match.params.movieId = "45"
props = { 
  location: { pathname: "/movies/45" },
  match: { params: { movieId: "45" }, 
}

// useEffect to get access to `:movieId`
  useEffect(() => {
    console.log('props', props);
    console.log('movid id', props.match.params.movieId);
    /**
 * props = { 
    location: { pathname: "/movies/45" },
    match: { params: { movieId: "45" }, 
  }
  Therefore, when path is /movies/:movieId then we can access it using `props.match.params.movieId`
*/
  }, []);
```

## useHistory

```jsx
import React from "react";
import { useHistory } from "react-router";

const Protected = (props) => {
  const history = useHistory();
  if (!props.isLoggedIn) {
    // if not logged in, redirect using history.push back to home
    history.push("/");
    return null;
  } else {
    // if logged in, show protected blog page
    return (
      <>
        {props.children}
      </>
    )
  }
};

export default Protected;
```