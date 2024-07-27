export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  // const name = searchParams.get("name")
  // const instrument = searchParams.get("instrument")

  // return Response.json({ name, instrument })
  ////////////////////////////////////////////////////////

  const obj = Object.fromEntries(searchParams.entries())

  return Response.json(obj)
}
