

export default async function Comments({ params }) {
    const { blogID } = await params;
    return (
        <>
            <div>All comment for {blogID}.</div>
        </>
    )
}