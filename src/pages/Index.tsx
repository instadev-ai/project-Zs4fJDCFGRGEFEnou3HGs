// ... keep existing code (imports and BlogPost component)

const Index = () => {
  // ... keep existing code (featuredPost and recentPosts)

  return (
    // ... keep existing code (up to Newsletter card)

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

    // ... keep existing code (rest of the component)