import invariant from "tiny-invariant";
import db from "../db.server";

export async function fetchDBShipDateData() {
    const dbShipDateData = await db.variantShipDateData.findMany();
    return dbShipDateData
  }
