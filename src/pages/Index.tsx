import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const BlogPost = ({ title, excerpt, date, category }) => (
  <Card className="overflow-hidden transition-all hover:shadow-lg">
    <CardHeader>
      <div className="text-sm text-muted-foreground">{category}</div>
      <CardTitle className="text-2xl">{title}</CardTitle>
      <CardDescription>{date}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{excerpt}</p>
    </CardContent>
    <CardFooter>
      <Button variant="link" className="ml-auto">
        Read more →
      </Button>
    </CardFooter>
  </Card>
);

const Index = () => {
  const featuredPost = {
    title: "The Future of Web Development",
    excerpt: "Explore the latest trends and technologies shaping the future of web development. From AI-powered tools to new frameworks...",
    date: "March 15, 2024",
    category: "Technology"
  };

  const recentPosts = [
    {
      title: "Mastering Modern Design",
      excerpt: "Learn the principles of modern design and how to apply them in your projects...",
      date: "March 14, 2024",
      category: "Design"
    },
    {
      title: "Building Sustainable Systems",
      excerpt: "Discover how to create sustainable and scalable systems that stand the test of time...",
      date: "March 13, 2024",
      category: "Architecture"
    },
    {
      title: "The Art of Storytelling",
      excerpt: "Understand the power of narrative and how to craft compelling stories that resonate...",
      date: "March 12, 2024",
      category: "Writing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container py-6">
          <h1 className="text-4xl font-bold">Your Blog</h1>
          <p className="mt-2 text-muted-foreground">Exploring ideas, sharing knowledge</p>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid gap-8 md:grid-cols-[1fr_300px]">
          <div className="space-y-8">
            {/* Featured Post */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Featured Post</h2>
              <BlogPost {...featuredPost} />
            </section>

            {/* Recent Posts */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Recent Posts</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {recentPosts.map((post, index) => (
                  <BlogPost key={index} {...post} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="flex flex-col space-y-1">
                  <Button variant="ghost" className="justify-start">Technology</Button>
                  <Button variant="ghost" className="justify-start">Design</Button>
                  <Button variant="ghost" className="justify-start">Architecture</Button>
                  <Button variant="ghost" className="justify-start">Writing</Button>
                </nav>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Newsletter</CardTitle>
                <CardDescription>Get the latest posts delivered to your inbox</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Enter your email" type="email" />
                <Button className="w-full">Subscribe</Button>
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

export default Index;