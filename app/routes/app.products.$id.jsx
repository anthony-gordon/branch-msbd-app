import { useParams } from "@remix-run/react";

export default function ProductPage(){
    const params = useParams();
    return (
        <h2>A Blog Post titled {params.id}</h2>
        )
}
