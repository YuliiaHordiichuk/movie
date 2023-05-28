# movie app

1. Types
   Done

- All types are moved to different files. Every class / component has its own \*.types.tsx file which creates new types end re-exports types from other files.

Ask - if this is a correct approach

2. HTTPCLient
   Done

- fetch method
- errors interceptor (handleError method)
- queryParams for all requests
- createSearchParams update

Ask

- if (!response.ok) handleError(). Do I need to throw an error if intercaption is not needed?
- handleError should be in HttpClientClass or moved to other class?

To be done

- handle errors correctly with every request
- create error notification

3. API
   Done

- every type(movie, tv, person) has its own classes for handling requests.
- every request is clear( all endpoins are moved to different methods) and returns the full API response.

4. Repositories
   Done

- every type(movie, tv, person) has its own repository for getting data. All received data is saved on its own and not mixed with other data (movie + tv)
- promises to async await
- transforming data - add additional data( e.g. type: 'movie'); transform only specific fields (birthday, vote_average, gender ...).

Ask

- tranforming data is ok?

5. Components
   Done

- devided by features, layouts and ui
- styles moved to its component folder
- index.tsx => App => RouterProvider

Ask

- types file for components (started to do it in ui folder)
- where to keep Root component?

6. Configs
   Done

- move reusable data into config files

Ask

- how to keep this data correctly

7. Pages
   Done

- Page folder has types.tsx, styles.tsx, Component.tsx and hooks folder.
- Hooks folder has
  1. hook for fetching data (returns its initial data)
  2. hook for transforming data (returns tranformed data)
  3. hook controller (for doing data manipulations and returning data needed for component render)
- Main page uses hook controller for getting data

Ask

- if the approach is correct

To be done

- handle errors if there is no data (right now it is redirecting to /404 page);
- trnding switcher (requests are sent with every switch )
- trending movies + tv (right now only movies )
