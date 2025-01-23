import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    { id: 1, title: "Our Latest Innovation", excerpt: "Discover how our new product is changing the industry..." },
    { id: 2, title: "Client Success Story", excerpt: "Learn how we helped a client increase their productivity by 200%..." },
    { id: 3, title: "Industry Trends for 2024", excerpt: "Stay ahead of the curve with our analysis of upcoming trends..." },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

