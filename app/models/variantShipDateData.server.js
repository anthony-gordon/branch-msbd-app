import db from "../db.server";

export async function fetchDBShipDateData() {
    const dbShipDateData = await db.variantShipDateData.findMany();
    return dbShipDateData
}

export async function fetchSettings() {
    const settings = await db.settings.findMany();
    return settings
}

export async function fetchUpdates() {
    const updates = await db.updates.findMany();
    return updates
}
