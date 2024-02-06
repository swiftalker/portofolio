import '@/css/prism.css'
import 'katex/dist/katex.css'

import { components } from '@/components/markdown/mdx-components'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import Link from '@/components/link'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'

export async function generateMetadata({
    params,
  }: {
    params: { slug: string[] }
  }): Promise<Metadata | undefined> {
    const slug = decodeURI(params.slug.join('/'))
    const post = allBlogs.find((p) => p.slug === slug)
    const authorList = post?.authors || ['default']
    const authorDetails = authorList.map((author) => {
      const authorResults = allAuthors.find((p) => p.slug === author)
      return coreContent(authorResults as Authors)
    })
    if (!post) {
      return
    }
  
    const publishedAt = new Date(post.date).toISOString()
    const modifiedAt = new Date(post.lastmod || post.date).toISOString()
    const authors = authorDetails.map((author) => author.name)
    let imageList = [siteMetadata.socialBanner]
    if (post.images) {
      imageList = typeof post.images === 'string' ? [post.images] : post.images
    }
    const ogImages = imageList.map((img) => {
      return {
        url: img.includes('http') ? img : siteMetadata.siteUrl + img,
      }
    })
  
    return {
      title: `${post.title} | ${siteMetadata.title}`,
      description: post.summary,
      openGraph: {
        title: post.title,
        description: post.summary,
        siteName: siteMetadata.title,
        locale: post.locale,
        type: 'article',
        publishedTime: publishedAt,
        modifiedTime: modifiedAt,
        url: './',
        images: ogImages,
        authors: authors.length > 0 ? authors : [siteMetadata.author],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.summary,
        images: imageList,
      },
    }
}

export default async function Page({ params }: { params: { slug: string[] } }) {
    const slug = decodeURI(params.slug.join('/'))
    // Filter out drafts in production
    const sortedCoreContents = allCoreContent(sortPosts(allBlogs))
    const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
    if (postIndex === -1) {
        return notFound()
    }

    const prev = sortedCoreContents[postIndex + 1]
    const next = sortedCoreContents[postIndex - 1]
    const post = allBlogs.find((p) => p.slug === slug) as Blog
    const authorList = post?.authors || ['default']
    const authorDetails = authorList.map((author) => {
        const authorResults = allAuthors.find((p) => p.slug === author)
        return coreContent(authorResults as Authors)
    })
    const mainContent = coreContent(post)
    const jsonLd = post.structuredData
    jsonLd['author'] = authorDetails.map((author) => {
        return {
        '@type': 'Person',
        name: author.name,
        }
    })

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="bg-primary-700 pattern-brick-wall-primary-300/50 pattern-crosses-scale-[0.5]">  
                <div className="container sticky max-w-7xl mx-auto pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-h-full">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <div className="w-6 bg-blue-300 rounded-lg p-1 text-gray-900 text-xs">
                            {post.language}
                        </div>
                        <span className="relative whitespace-nowrap text-gray-100 lg:text-6xl text-2xl font-bold capitalize">
                            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-gray-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                            <span className="relative">
                                {post.title}
                            </span>
                        </span>
                        <p className="mt-2 text-md leading-8 text-gray-300">
                            {post.summary}
                        </p>
                        <div className="mt-8">
                            <div className="flex flex-row items-center space-x-2 bg-white rounded-lg hover:drop-shadow-lg py-5 px-4 lg:w-[21rem] w-full">
                                <AuthorDetails posts={post} />
                                <div className="bg-gray-500 gap-4 whitespace-nowrap my-0 h-12 lg:w-[0.1rem] w-[0.15rem]" />
                                <div className="flex flex-col ml-4 ">
                                    <div className="text-sm leading-6">
                                        <div className="font-semibold text-gray-900 ">
                                            <time dateTime={post.date}>{formatDate(post.date, siteMetadata.locale)}</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 pattern-crosses-primary-300/50 pattern-crosses-scale-[0.5]">  
                <div className="container sticky max-w-7xl mx-auto pt-5 pb-12 px-4 sm:px-6 lg:px-8 max-h-full">
                    <div className="flex rounded-lg bg-white py-5 px-3 w-full border border-gray-300 hover:drop-shadow-xl">
                        <div className="flex w-full">
                            <div className="overflow-auto my-0 space-y-3 prose prose-slate dark:prose-dark text-balance max-w-full text-justify">
                                <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function AuthorDetails({posts}) {
  const authorList = posts?.authors || ['default']
  const authorDetails = authorList.map((author) => {
      const authorResults = allAuthors.find((p) => p.slug === author)
      return coreContent(authorResults as Authors)
  })

  return (
      <div className="relative flex items-center">
          {authorDetails.map((author) => {
              return (
                  <div key={author}>
                      <div className="flex flex-row space-x-2 items-center">
                        <img src={author.avatar} alt="" className="h-12 w-12 rounded-full bg-gray-50 ring-2 ring-gray-200" />
                        
                        <div className="text-sm leading-6 ml-4">
                            <div className="font-semibold text-gray-900">
                                {author.name}
                            </div>

                            {author.github && (
                                <Link
                                href={author.github}
                                className="text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                >
                                {author.github.replace('https://github.com/', '@')}
                                </Link>
                            )}
                        </div>
                      </div>
                  </div>
              )
          })}
      </div>
  )
}