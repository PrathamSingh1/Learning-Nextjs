

export default async function File({ params }) {
    const { filePath } = await params;
    return (
        <>
            <div>File /{filePath.join("/")}</div>
        </>
    )
}