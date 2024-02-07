import type { Authors, Blog } from 'contentlayer/generated'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import Link from '@/components/link'
import Pagination, { PaginationProps } from '@/components/blog/pagination'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { genPageMetadata } from '@/app/seo'
import type { Metadata } from "next";

const POSTS_PER_PAGE = 5

export const metadata: Metadata = genPageMetadata({ title: 'Blog' })

interface ContentProps {
  posts: any,
  initialDisplayPosts?: any,
  pagination?: PaginationProps
}

export default async function Page({ params }: { params: { page: string } }) {
    const posts = allCoreContent(sortPosts(allBlogs))
    const pageNumber = 1
    const initialDisplayPosts = posts.slice(
      POSTS_PER_PAGE * (pageNumber - 1),
      POSTS_PER_PAGE * pageNumber
    )
    const pagination = {
      currentPage: pageNumber,
      totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    }

    return (
        <>
            <div className="bg-primary-700 pattern-architect-primary-300/50 pattern-architect-scale-[0.5]">  
                <div className="container sticky max-w-7xl mx-auto pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-h-full">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <span className="relative whitespace-nowrap text-gray-100 text-6xl font-bold capitalize">
                        <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-gray-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                        <span className="relative">Latest</span>
                    </span>
                    <p className="mt-2 text-lg leading-8 text-gray-300">
                        {siteMetadata.description}
                    </p>
                </div>
                </div>
            </div>
            <Content
                posts={posts}
                initialDisplayPosts={initialDisplayPosts}
                pagination={pagination}
            />
        </>
    )
}

async function Content({
    posts,
    initialDisplayPosts = [],
    pagination,
  }: ContentProps) {
    const filteredBlogPosts = posts
    const displayPosts =
      initialDisplayPosts.length > 0 ? initialDisplayPosts : filteredBlogPosts
    return (
        <div className="bg-white pattern-tic-tac-toe-primary-300/50 pattern-tic-tac-toe-scale-[0.5]">  
            <div className="container sticky max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 max-h-full">
                <div className="flex flex-col">
                    {!filteredBlogPosts.length && 'No posts found.'}
                    {displayPosts.map((post, index) => {
                    const { slug, date, title, summary } = post
                    return (
                        <article key={slug}>
                        <div className="bg-white rounded-lg border border-gray-300 hover:drop-shadow-lg py-3 px-2 w-full">
                            <div className="flex flex-row space-x-2 mb-3 text-sm">
                                <div className="flex bg-blue-300 rounded-lg p-1 text-gray-900">
                                {post.language}
                                </div>
                                <div className="bg-gray-500 gap-4 whitespace-nowrap my-0 h-8 w-[0.1rem]" />
                                <dl>
                                <dt className="sr-only">Published on</dt>
                                <dd className="font-medium leading-8 text-gray-500">
                                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                                </dd>
                                </dl>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="space-y-2">
                                <h1 className="text-3xl font-bold leading-8 tracking-tight">
                                    <Link
                                    href={`/blog/${slug}`}
                                    className="text-blue-900"
                                    >
                                    {title}
                                    </Link>
                                </h1>
                                <AuthorDetails posts={post} />
                                </div>
                                <div className="prose max-w-none text-gray-500">
                                {summary}
                                </div>
                                <div className="text-base font-medium leading-6">
                                <Link
                                    href={`/blog/${slug}`}
                                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                    aria-label={`Read more: "${title}"`}
                                >
                                    Read more &rarr;
                                </Link>
                                </div>
                            </div>
                        </div>
                        {index < displayPosts.length - 1 && ( // Check if it's not the last post
                            <div className="py-8">
                            <div className="border-t border-gray-400"></div>
                            </div>
                        )}
                        </article>
                        )
                    })}
                </div>
            
                {pagination && pagination.totalPages > 1 && (
                    <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
                )}
            </div>
        </div>
    )
}

function AuthorDetails({posts}) {
    const authorList = posts?.authors || ['default']
    const authorDetails = authorList.map((author) => {
        const authorResults = allAuthors.find((p) => p.slug === author)
        return coreContent(authorResults as Authors)
    })
  
    return (
        <div className="relative mt-8 flex items-center gap-x-4">
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