import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { authenticate } from "../shopify.server";
import { MyContextProvider } from '../MyContext';
import { fetchDBShipDateData, fetchSettings } from "../models/variantShipDateData.server";
import { useState, useContext, useEffect } from "react"
import { MyContext } from '../MyContext';
import { formatDbProducts } from "../utils/dataFormattingFunctions"



export const links = () => [{ rel: "stylesheet", href: polarisStyles }];


export const loader = async ({ request }) => {
  await authenticate.admin(request);

  const [dataBaseProducts, settingsData] = await Promise.all([
    fetchDBShipDateData(),
    fetchSettings()
])

  return json({ apiKey: process.env.SHOPIFY_API_KEY || "", dataBaseProducts, settingsData});
};

export default function App() {
  const { setSettings } = useContext(MyContext);
  const { setDbProducts } = useContext(MyContext);
  const { setDbProductsFormatted } = useContext(MyContext);


  const loadData = useLoaderData();
  const {apiKey, dataBaseProducts, settingsData} = loadData

  console.log('dataBaseProducts', dataBaseProducts)

  useEffect(() => {
    setDbProducts(dataBaseProducts);
    setSettings(settingsData);
    setDbProductsFormatted(formatDbProducts(dataBaseProducts));
  }, []);

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
        <ui-nav-menu>
          <Link to="/app" rel="home">
            Home
          </Link>
          <Link to="/app/settings">Settings</Link>
        </ui-nav-menu>
        <Outlet />
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
