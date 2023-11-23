import { fetchUpdates } from "../models/variantShipDateData.server";
import { useLoaderData, useSubmit, useActionData } from "@remix-run/react";
import { json } from "@remix-run/node";

import { dbUpdateRecord } from "../utils/updateFunctions"



export const loader = async ({ request }) => {
  
    const updateData = await fetchUpdates()
  
    return json({ updateData});
  };

export const action = async ({request}) => {

  const updates = await dbUpdateRecord();
  console.log('updates', updates)

  return json({updates})
}
 

export default function Updates() {
  const submit = useSubmit();

  const handleClick = () => {
   

    submit({}, { method: "post" });

  }

    

    const loadData = useLoaderData();
    const actionData = useActionData();

    console.log('actionData', actionData)
    const { updateData } = loadData;
    console.log('updateData', updateData)
    return (
        <div className="Updated">Updates
            <button onClick={handleClick}>Update</button>
        </div>
    )
}
