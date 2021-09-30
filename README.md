Very simple project for experimentation with typescript, react classes, ssr, dynamic imports and webpack chunking.

For dynamic imports i'm using @loadable/component, with simple functional components which is a copy of orginal one, without js functionality as a fallback.

I'm not using classes components there because after babel transpilation they take more bytes than functional components.

That could be achived better by gatsby || next.js , but my curiosity was stronger

=================================================================

Express app will be using ts-node on the server to run and serve html files.

The idea is, that server code will be started by using ts-node script, so no webpack or babel transpilation of server code.(Still wondering about creating another webpack config just for index.ts, was reading recently about using ts-node on production, and looks like it's not a good idea)

The first render will take the react code, and render it to string, routing is handled by react app component. If user go to non existing route, renderToString returns undefined which is handled by express to redirect to 404 page.

Server is able to render a page preload state, which is a skeleton placeholder for true app code.

Preload and real app share the same style code in index.css.
Any css code needed for real app code will be contained in module.css and imported to the component.

==================================================================

So, the server sends raw html file, with content rendered based of route. Then browser requests a css file from express static dir which is a /build folder, then user is able to view a styled no-js version of an app. Then a script bundle.js is downloaded. Which inject the js functionality and handles user request from that point.

Because every page is dynamicly imported, if user switch route, skeleton will be send and app should be able to request a chunk, and module.css to handle app view and functionality.

==================================================================

For frontend version, i filtered the code od react, react-dom and react-router-dom.
So the dependencies are served from react cdn.(Little imitation of production) There is a preconnect link in html head, and js scripts are defered.

Head also got preload tag on css, to delay first render, and prevent little white/black blink for initial render. Initial render should be still fast enough to be SEO friendly.

=================================================================

Project also got service worker, which has his own config and is registered just when main script got loaded. Service worker got online-first approach. (Still learing, i know i could use workbox, would be way easier, and way better, but i'm sill experimeting with it, doin it without workbox for learning purpose);

==================== Project Architecture Map ===================

@Backend :

index.ts

    routes
    templates
    controllers
    middleware

@Frontend :

index.tsx
index.css
service-worker.ts

    views
    mixins
    components {
        atoms
        molecules
        organisms
        templates
    }
    providers
    hooks
    store
