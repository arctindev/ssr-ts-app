Very simple project for experimentation with typescript, react classes, ssr, dynamic imports and webpack chunking.

For dynamic imports i'm using @loadable/component, with simple functional components which is a copy of orginal one, without js functionality as a fallback.

I'm not using classes components there because after babel transpilation they take more bytes than functional components.

That could be achived better by gatsby || next.js , but my curiosity was stronger

Express app will be using ts-node on the server to serve html files