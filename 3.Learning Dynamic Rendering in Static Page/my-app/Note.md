How to make static pages dynamic

1- 

export const dynamic = "force-dynamic";

2- 

Take props { searchParams }

and await it .

3-

import { cookies } from "next/headers";



const myCookies = await cookies()
console.log(myCookies);