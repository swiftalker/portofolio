
export default function Footer() {
    return (
        <footer className={`bg-white relative border-b-4 border-green-400`}>
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-1">
                        <p className="inline-flex text-sm text-blue-700 font-bold mb-2">
                            Made with
                            <svg className="w-5 h-5 text-red-500 mr-1 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                            by Adnan Muhammad
                            <span
                                className="mb-0 ml-1 mr-1 mt-1text-xl text-gray-600 font-body">•</span>
                            © {new Date().getFullYear()}
                        </p>
                        <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}