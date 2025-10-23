

export default async function Comment({ params }) {
    const { commentID, blogID } = await params;
    return (
        <>
            <div>Comment no. <i>{commentID}</i> on page {blogID}.</div>
        </>
    )
}