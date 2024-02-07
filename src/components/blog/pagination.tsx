"use client"
import { usePathname } from 'next/navigation'
import Link from '@/components/link'

export interface PaginationProps {
    totalPages: number
    currentPage: number
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
    const pathname = usePathname()
    const basePath = pathname.split('/')[1]
    const prevPage = currentPage - 1 > 0
    const nextPage = currentPage + 1 <= totalPages
  
    return (
      <div className="space-y-2 pb-8 pt-6 md:space-y-5 text-gray-900">
        <nav className="flex justify-between">
          {!prevPage && (
            <button className="bg-white rounded-lg border border-gray-400 p-2 text-gray-500 cursor-auto disabled:opacity-50" disabled={!prevPage}>
              Previous
            </button>
          )}
          {prevPage && (
            <Link
              href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
              rel="prev"
              className="bg-white rounded-lg border border-gray-400 p-2 font-medium hover:font-bold hover:drop-shadow-lg text-gray-900 hover:text-gray-500"
            >
              Previous
            </Link>
          )}
          <span>
            {currentPage} of {totalPages}
          </span>
          {!nextPage && (
            <button className="bg-white rounded-lg border border-gray-400 p-2 text-gray-500 cursor-auto disabled:opacity-50" disabled={!nextPage}>
              Next
            </button>
          )}
          {nextPage && (
            <Link 
            href={`/${basePath}/page/${currentPage + 1}`} 
            rel="next" 
            className="bg-white rounded-lg border border-gray-400 p-2 font-medium hover:font-bold hover:drop-shadow-lg text-gray-900 hover:text-gray-500"
            >
              Next
            </Link>
          )}
        </nav>
      </div>
    )
}