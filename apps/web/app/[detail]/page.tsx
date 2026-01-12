export default async function page(
    { params }:
        { params: { detail: string } 
}) {

    const { detail } = await params;
    
    return (
        <div>
            What did you think you would find at "{detail}"?
        </div>
    )
}