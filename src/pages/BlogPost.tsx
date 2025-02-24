import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary/5 py-16">
        <div className="container relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-primary">
              ← Back to Blog
            </Button>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                {post.category}
              </span>
              <span className="text-muted-foreground">{post.date}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{post.readTime}</span>
            </div>
            <h1 className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              {post.title}
            </h1>
            
            {/* Author info */}
            <div className="flex items-center gap-4 pt-4">
              <Avatar className="h-12 w-12">
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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary/1),transparent)]" />
      </section>

      <main className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          {/* Main content */}
          <article className="prose prose-gray max-w-none dark:prose-invert">
            {post.content.split('\n\n').map((paragraph, index) => (
              <div key={index} className="mb-6">
                {paragraph.startsWith('##') ? (
                  <h2 className="mt-12 text-3xl font-bold tracking-tight">{paragraph.replace('##', '').trim()}</h2>
                ) : paragraph.startsWith('-') ? (
                  <ul className="my-6 list-none space-y-3 pl-6">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="relative before:absolute before:-left-6 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                        {item.replace('-', '').trim()}
                      </li>
                    ))}
                  </ul>
                ) : paragraph.match(/^\d\./) ? (
                  <ol className="my-6 list-decimal space-y-3 pl-6">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="pl-2">
                        <span>{item.replace(/^\d\./, '').trim()}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="leading-relaxed text-muted-foreground">{paragraph}</p>
                )}
              </div>
            ))}
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <Card className="border-0 bg-card/50">
              <CardHeader>
                <h3 className="text-xl font-bold">Related Posts</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                {relatedPosts.map((post, index) => (
                  <div key={index}>
                    {index > 0 && <Separator className="my-6" />}
                    <div className="group space-y-3">
                      <div className="text-sm font-medium text-primary">{post.category}</div>
                      <h4 className="font-medium transition-colors group-hover:text-primary">{post.title}</h4>
                      <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 bg-primary/5">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="font-bold">Share this post</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary">
                      Facebook
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-card/50">
        <div className="container py-12">
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Your Blog. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostPage;