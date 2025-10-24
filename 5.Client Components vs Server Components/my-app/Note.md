Client Components vs Server Components -

Every components you create are by default server components.

Server Components - 

It will only execute only on the server.


Client Components -

"use client"

Client components execute on the server as well as on the client.

Whenever you have to perform something on the browser(onClick) or you use the any react hooks in the component then you have to create the component to a client component.

When you make a parent component a client component then their all children component are also become the client component.

You should only make those part of code a client component in which the interactivity needed not the entire parent.