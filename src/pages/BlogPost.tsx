import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const BlogPostPage = () => {
  const post = {
    title: "The Future of Web Development",
    date: "March 15, 2024",
    category: "Technology",
    readTime: "8 min read",
    author: {
      name: "Sarah Johnson",
      image: "/placeholder-avatar.jpg",
      role: "Senior Developer"
    },
    content: `
      The landscape of web development is constantly evolving, bringing new possibilities and challenges to developers worldwide. As we look towards the future, several emerging trends and technologies are shaping how we build and interact with web applications.

      ## AI-Powered Development

      Artificial Intelligence is revolutionizing how we approach web development. From code completion to automated testing, AI tools are becoming an integral part of the development workflow. These advancements are not just improving efficiency; they're fundamentally changing how developers work.

      ## The Rise of Web Components

      Web Components represent a significant shift in how we build reusable UI elements. This technology allows developers to create encapsulated, reusable components that work across different frameworks and libraries. The benefits include:

      - Better code organization
      - Improved reusability
      - Framework independence
      - Enhanced maintainability

      ## Performance and User Experience

      As web applications become more complex, performance optimization becomes increasingly crucial. Modern web development focuses on:

      1. Core Web Vitals
      2. Progressive Web Apps (PWAs)
      3. Optimized asset delivery
      4. Improved caching strategies

      ## Looking Ahead

      The future of web development is bright and full of possibilities. As new technologies emerge and existing ones mature, we'll continue to see innovations that make the web more powerful, accessible, and user-friendly.
    `
  };

  const relatedPosts = [
    {
      title: "Understanding Modern JavaScript",
      excerpt: "Explore the latest features and best practices in JavaScript development",
      date: "March 14, 2024",
      category: "Development"
    },
    {
      title: "Responsive Design Principles",
      excerpt: "Learn how to create websites that work flawlessly across all devices",
      date: "March 13, 2024",
      category: "Design"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container py-6">
          <Button variant="ghost" className="mb-4">← Back to Blog</Button>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">{post.title}</h1>
            
            {/* Author info */}
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={post.author.image} alt={post.author.name} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">{post.author.role}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Main content */}
          <article className="prose prose-gray max-w-none dark:prose-invert">
            {post.content.split('\n\n').map((paragraph, index) => (
              <div key={index} className="mb-6">
                {paragraph.startsWith('##') ? (
                  <h2 className="mt-8 text-2xl font-bold">{paragraph.replace('##', '').trim()}</h2>
                ) : paragraph.startsWith('-') ? (
                  <ul className="my-4 list-disc pl-6">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="mb-2">{item.replace('-', '').trim()}</li>
                    ))}
                  </ul>
                ) : paragraph.match(/^\d\./) ? (
                  <ol className="my-4 list-decimal pl-6">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="mb-2">{item.replace(/^\d\./, '').trim()}</li>
                    ))}
                  </ol>
                ) : (
                  <p className="leading-relaxed">{paragraph}</p>
                )}
              </div>
            ))}
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Related Posts</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedPosts.map((post, index) => (
                  <div key={index}>
                    {index > 0 && <Separator className="my-4" />}
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">{post.category}</div>
                      <h4 className="font-medium hover:underline">{post.title}</h4>
                      <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Share this post</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Twitter</Button>
                    <Button variant="outline" size="sm">LinkedIn</Button>
                    <Button variant="outline" size="sm">Facebook</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-8">
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Your Blog. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostPage;