import ArticleCard from "../components/article-card"

const ArticlesListRoute = () => {
	return (
		<section className='h-full overflow-y-auto py-16' style={{ WebkitMaskBoxImage }}>
			<div className='mx-auto max-w-screen-xl px-4 md:px-8'>
				<div className='sm:mx-auto sm:max-w-md sm:text-center'>
					<h1 className='mb-4 text-3xl font-extrabold text-gray-800 sm:text-4xl'>Latest Articles</h1>
					<p className='text-sm text-gray-500'>Articles cherished by the community.</p>
					<p className='text-sm text-gray-500'>Refreshed on an hourly basis.</p>
				</div>
				<ul className='mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
					{posts.map((article, idx) => (
						<ArticleCard key={`${article.title}-${idx}`} {...article} />
					))}
				</ul>
			</div>
		</section>
	)
}

const posts = [
	{
		date: "Jan 4 2022",
		desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
		href: "#",
		img: "https://th.bing.com/th/id/OIP.2usyV3OhAqbIc2HSkBNuBQHaEa?rs=1&pid=ImgDetMain0",
		title: "What is SaaS? Software as a Service Explained",
	},
	{
		date: "Jan 4 2022",
		desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
		href: "#",
		img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		title: "A Quick Guide to WordPress Hosting",
	},
	{
		date: "Jan 4 2022",
		desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
		href: "#",
		img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		title: "7 Promising VS Code Extensions Introduced in 2022",
	},
	{
		date: "Jan 4 2022",
		desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
		href: "#",
		img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
	},
]

export default ArticlesListRoute

const WebkitMaskBoxImage =
	"linear-gradient(to bottom, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 1%, hsl(0 0% 0% / 1) 98%, hsl(0 0% 0% / 0))"
