import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import { MyContextProvider } from './MyContext';
import { json } from "@remix-run/node";
import { fetchDBShipDateData, fetchSettings } from "./models/variantShipDateData.server";
import { MyContext } from './MyContext';
import { useContext, useEffect } from "react"


export default function App() {

  

  return (
    <MyContextProvider>
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <LiveReload />
          <Scripts />
        </body>
      </html>
    </MyContextProvider>
  );
}
