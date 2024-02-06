import type { Authors } from 'contentlayer/generated'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import Link from '@/components/link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

export default function Blog() {
    const MAX_DISPLAY = 3
    const sortedPosts = sortPosts(allBlogs)
    const posts = allCoreContent(sortedPosts)
    return (
        <div>
            <div className="bg-white pattern-squiggles-primary-300/50 pattern-squiggles-scale-[0.5]">
                <div className="container sticky max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 max-h-full">
                    <div className="mx-auto lg:max-w-full max-w-2xl lg:mx-0">
                        <div className="flex lg:justify-between w-full">
                            <div className="flex justify-start w-full">
                                <span className="relative whitespace-nowrap text-primary-600 text-4xl font-bold capitalize">
                                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                                <span className="relative">Blog</span>
                                </span>
                            </div>
                            <div className="flex justify-end w-full">
                                <Link href="/blog" className="text-primary-600 font-semibold hover:text-primary-700">
                                    View all
                                </Link>
                            </div>
                        </div>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            {siteMetadata.description}
                        </p>
                    </div>
                    <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.slice(0, MAX_DISPLAY).map((post) => {
                            return (
                                <article key={post.slug} className="flex max-w-xl flex-col items-start justify-between">
                                    <div className="flex flex-row items-center gap-x-2 text-xs">
                                        <div className="flex bg-blue-300 rounded-lg p-1 text-gray-900">
                                            {post.language}
                                        </div>
                                        <div className="bg-gray-500 gap-4 whitespace-nowrap my-0 h-8 w-[0.1rem]" />
                                        <dl>
                                        <dt className="sr-only">Published on</dt>
                                        <dd className="font-medium leading-8 text-gray-500">
                                            <time dateTime={post.date}>{formatDate(post.date, siteMetadata.locale)}</time>
                                        </dd>
                                        </dl>
                                    </div>
                                    <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="text-blue-900"
                                        >
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.summary}</p>
                                    </div>
                                    <AuthorDetails posts={post} />
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function AuthorDetails({posts}) {
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
                        <img src={author.avatar} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm leading-6">
                            <div className="font-semibold text-gray-900">
                                {author.name}
                            </div>
                            {author.github && (
                                <Link
                                href={author.github}
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                >
                                {author.github.replace('https://github.com/', '@')}
                                </Link>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}