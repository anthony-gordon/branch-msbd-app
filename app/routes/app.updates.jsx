import { fetchUpdates } from "../models/variantShipDateData.server";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader = async ({ request }) => {
  
    const updateData = await fetchUpdates()
  
    return json({ updateData});
  };

export default function Updates() {
    const loadData = useLoaderData();
    const { updateData } = loadData;
    console.log('updateData', updateData)
    return (
        <div class="Updated">Updates</div>
    )
}
