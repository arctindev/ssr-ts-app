Very simple project for experimentation with typescript, react classes, ssr, dynamic imports and webpack chunking.

For dynamic imports i'm using @loadable/component, with simple functional components which is a copy of orginal one, without js functionality as a fallback.

I'm not using classes components there because after babel transpilation they take more bytes than functional components.

That could be achived better by gatsby || next.js , but my curiosity was stronger

=================================================================

Express app will be using ts-node on the server to run and serve html files.

The idea is, that server code will be started by using ts-node script, so no webpack or babel transpilation of server code.

The first render will take the react code, and render it to string, routing is handled by react app component. If user go to non existing route, renderToString returns undefined which is handled by express to redirect to 404 page.

Server is able to render a page preload state, which is a skeleton placeholder for true app code.

Preload and real app share the same style code in index.css.
Any css code needed for real app code will be contained in module.css and imported to the component.

==================================================================

So, the server sends raw html file, with content rendered based of route. Then browser requests a css file from express static dir which is a /build folder, then user is able to view a styled no-js version of an app. Then a script bundle.js is downloaded. Which inject the js functionality and handles user request from that point.

Because every page is dynamicly imported, if user switch route, skeleton will be send and app should be able to request a chunk, and module.css to handle app view and functionality.
