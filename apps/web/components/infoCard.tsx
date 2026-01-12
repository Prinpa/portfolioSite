import { isDataView } from "node:util/types"
import Link from "next/link";

export function InfoCard({data}: any) {

    return (

        <Link href={`/${data.urlTitle}`} style={{textDecoration: "none"}}>
            <div>
                {data.title}
            </div>
        </Link>

    )
}