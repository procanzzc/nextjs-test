import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = (await params).id
  const key = (await searchParams).key

  // fetch data
  const product = {
    title: "DogeDOGE",
    id,
    key,
    description: "During the Biden-Harris administration, there have been many months where more aliens have entered the USA than were American Babies born."
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: ['https://x.com/fentasyl/status/1853618589321879634', ...previousImages],
    },
  }
}

export default function Page() {
  return (<div>Test Meta</div>)
}
