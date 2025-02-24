import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const BlogPost = ({ title, excerpt, date, category }) => (
  <Card className="group overflow-hidden border-0 bg-white/50 backdrop-blur-sm transition-all hover:bg-white/80">
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-100/20 via-sky-100/20 to-violet-100/20">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-rose-500/10 blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/50 to-transparent backdrop-blur-[2px]" />
        <div className="mx-auto max-w-[85rem]">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
              Your Life
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Exploring ideas, sharing knowledge, and building the future together. 
              Discover insights about technology, design, and innovation.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 mx-auto max-w-[85rem] py-16">
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
            <Card className="border-0 bg-white/50 backdrop-blur-sm">
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
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/50 via-white/30 to-white/20 backdrop-blur-sm">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-500/5 via-red-500/10 to-red-500/5" />
              <CardHeader>
                <CardTitle className="text-xl font-bold">Newsletter</CardTitle>
                <CardDescription className="text-base">
                  Stay updated with our latest stories and insights
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="Enter your email" 
                  type="email"
                  className="border-red-100 bg-white/80 transition-colors focus-visible:ring-red-500"
                />
                <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 font-medium text-white transition-all hover:from-red-700 hover:to-red-600">
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-black/5 bg-white/30 backdrop-blur-sm">
        <div className="mx-auto max-w-[85rem] py-12">
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Your Blog. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;