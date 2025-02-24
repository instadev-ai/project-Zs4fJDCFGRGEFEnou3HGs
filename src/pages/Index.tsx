import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const BlogPost = ({ title, excerpt, date, category }) => (
  <Card className="group overflow-hidden border-0 bg-card/50 transition-all hover:bg-card">
    <CardHeader className="space-y-4">
      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
        {category}
      </div>
      <CardTitle className="text-2xl font-bold tracking-tight transition-colors group-hover:text-primary">
        {title}
      </CardTitle>
      <CardDescription className="font-medium text-muted-foreground">
        {date}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-base leading-relaxed text-muted-foreground">{excerpt}</p>
    </CardContent>
    <CardFooter>
      <Link to="/blog-post" className="ml-auto group">
        <Button variant="ghost" className="group-hover:bg-transparent group-hover:text-primary">
          Read more 
          <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

const Index = () => {
  const featuredPost = {
    title: "The Future of Web Development",
    excerpt: "Explore the latest trends and technologies shaping the future of web development. From AI-powered tools to new frameworks, discover what's next in the world of web development.",
    date: "March 15, 2024",
    category: "Technology"
  };

  const recentPosts = [
    {
      title: "Mastering Modern Design",
      excerpt: "Learn the principles of modern design and how to apply them in your projects. Discover the secrets behind creating beautiful and functional interfaces.",
      date: "March 14, 2024",
      category: "Design"
    },
    {
      title: "Building Sustainable Systems",
      excerpt: "Discover how to create sustainable and scalable systems that stand the test of time. Best practices for building robust applications.",
      date: "March 13, 2024",
      category: "Architecture"
    },
    {
      title: "The Art of Storytelling",
      excerpt: "Understand the power of narrative and how to craft compelling stories that resonate with your audience and drive engagement.",
      date: "March 12, 2024",
      category: "Writing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-primary/5 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary/1),transparent)]" />
        <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
              Your Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Exploring ideas, sharing knowledge, and building the future together. 
              Discover insights about technology, design, and innovation.
            </p>
          </div>
        </div>
      </section>

      <main className="container py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            {/* Featured Post */}
            <section>
              <h2 className="mb-8 text-3xl font-bold tracking-tight">Featured Post</h2>
              <BlogPost {...featuredPost} />
            </section>

            {/* Recent Posts */}
            <section>
              <h2 className="mb-8 text-3xl font-bold tracking-tight">Recent Posts</h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {recentPosts.map((post, index) => (
                  <BlogPost key={index} {...post} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            {/* Categories */}
            <Card className="border-0 bg-card/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="flex flex-col space-y-2">
                  {["Technology", "Design", "Architecture", "Writing"].map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      className="justify-start hover:bg-primary/10 hover:text-primary"
                    >
                      {category}
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="border-0 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Newsletter</CardTitle>
                <CardDescription className="text-base">
                  Get the latest posts delivered directly to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="Enter your email" 
                  type="email"
                  className="bg-background"
                />
                <Button className="w-full bg-red-600 font-medium text-white hover:bg-red-700">
                  Subscribe
                </Button>
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

export default Index;