


type PageProps = {
  params: {
    id: string
  }
}

export default async function Page(props: PageProps) {
  const { id } = await props.params

  return (
    <>
    <div>Hello World</div>
    <hr /> 
    </>
  )
}

