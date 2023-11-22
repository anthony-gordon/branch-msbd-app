import { fetchUpdates } from "../models/variantShipDateData.server";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { json } from "@remix-run/node";

import { dbUpdateRecord } from "../utils/updateFunctions"



export const loader = async ({ request }) => {
  
    const updateData = await fetchUpdates()
  
    return json({ updateData});
  };

export const handleClick = async () => {
    const updates = await dbUpdateRecord();
    console.log('updates', updates)
  }
 

export default  function Updates() {

    

    const loadData = useLoaderData();
    const { updateData } = loadData;
    console.log('updateData', updateData)
    return (
        <div class="Updated">Updates
            <button onClick={handleClick}>Update</button>
        </div>
    )
}
