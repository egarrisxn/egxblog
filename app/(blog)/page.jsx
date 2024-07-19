import Link from 'next/link'
import Image from 'next/image'
import {client, urlFor} from '../../lib/sanityClient'
import {Card, CardContent} from '../../components/ui/card'
import {Button} from '../../components/ui/button'

// export const revalidate = 600

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    coverImage
  }`
  const data = await client.fetch(query)
  return data
}

export default async function Home() {
  const data = await getData()
  const [firstBlog, ...otherBlogs] = data

  return (
    <main className='mx-auto my-4 max-w-6xl px-1 sm:px-4'>
      {/* Highlighted first blog post */}
      <section className='mb-6 sm:my-12'>
        <Card className='sm:border-2 sm:p-1 sm:shadow-sm sm:shadow-green-400/80'>
          <Image
            src={urlFor(firstBlog.coverImage).url()}
            alt='image'
            width={1120}
            height={600}
            className='mx-auto rounded-t-lg border object-cover md:h-[340px] lg:h-[460px] xl:h-[520px]'
          />
          <CardContent className='mt-4'>
            <h2 className='line-clamp-2 text-xl font-bold xl:text-2xl 2xl:text-3xl'>
              {firstBlog.title}
            </h2>
            <p className='mt-2 line-clamp-3 text-gray-700 xl:text-xl 2xl:text-2xl dark:text-gray-400'>
              {firstBlog.smallDescription}
            </p>
            <Button asChild className='mt-4 w-full'>
              <Link href={`/blog/${firstBlog.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <hr className='hidden h-1 bg-foreground md:block' />

      {/* Grid for remaining blog posts */}
      <section className='grid grid-cols-1 gap-6 md:my-12 md:grid-cols-2 2xl:gap-10'>
        {otherBlogs.map((blog, idx) => (
          <Card key={idx} className='sm:border-2 sm:p-1 sm:shadow-sm sm:shadow-green-400/80'>
            <Image
              src={urlFor(blog.coverImage).url()}
              alt='image'
              width={750}
              height={215}
              className='mx-auto rounded-t-lg border object-cover md:h-[180px] lg:h-[215px]'
            />
            <CardContent className='mt-4'>
              <h2 className='line-clamp-2 text-xl font-bold 2xl:text-2xl'>{blog.title}</h2>
              <p className='mt-2 line-clamp-2 text-gray-700 2xl:text-xl dark:text-gray-400'>
                {blog.smallDescription}
              </p>
              <Button asChild className='mt-4 w-full'>
                <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}
