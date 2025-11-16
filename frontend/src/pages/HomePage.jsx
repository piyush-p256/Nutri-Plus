import { useState, useEffect } from 'react';
import ArticleCard from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, TrendingUp, Clock, BookOpen } from 'lucide-react';
import { mockArticles } from '@/data/mockData';
import { toast } from 'sonner';

export const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Simulate loading articles
    setArticles(mockArticles);
  }, []);

  const featuredArticle = articles.find(a => a.featured);

  // Get unique categories from articles
  const categories = ['All', ...new Set(articles.map(a => a.category))];

  // Filter articles based on search query and category
  const getFilteredArticles = () => {
    let filtered = articles.filter(a => !a.featured);

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(a => a.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(query) ||
        a.excerpt.toLowerCase().includes(query) ||
        a.content.toLowerCase().includes(query) ||
        a.category.toLowerCase().includes(query) ||
        a.author.name.toLowerCase().includes(query)
      );
    }

    return filtered;
  };

  const trendingArticles = getFilteredArticles();

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is handled automatically through filtering
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      toast.success('Successfully subscribed! Check your email for confirmation.');
      e.target.reset();
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 -z-10" />
        
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 mb-12 fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif gradient-text">
              Nutri Plus
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring ideas, sharing stories, and inspiring minds through thoughtful writing.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles, topics, authors..."
                  className="pl-12 h-12 text-base shadow-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 fade-in stagger-2">
            <div className="text-center p-4 rounded-lg bg-card shadow-sm">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Articles</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card shadow-sm">
              <div className="flex justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-foreground">50K+</div>
              <div className="text-sm text-muted-foreground">Readers</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card shadow-sm">
              <div className="flex justify-center mb-2">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">Daily</div>
              <div className="text-sm text-muted-foreground">Updates</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card shadow-sm">
              <div className="flex justify-center mb-2">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-foreground">20+</div>
              <div className="text-sm text-muted-foreground">Authors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-accent" />
              <h2 className="text-2xl sm:text-3xl font-bold font-serif">Featured Story</h2>
            </div>
            <div className="fade-in stagger-3">
              <ArticleCard article={featuredArticle} featured />
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12" id="categories">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'default' : 'secondary'}
                className={`cursor-pointer px-4 py-2 text-sm fade-in stagger-${index + 4} ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90'
                    : 'hover:bg-muted'
                }`}
                onClick={() => handleCategoryFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Articles */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif">
              {searchQuery.trim() || selectedCategory !== 'All' ? 'Search Results' : 'Trending Articles'}
            </h2>
            {(searchQuery.trim() || selectedCategory !== 'All') && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
          
          {trendingArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingArticles.map((article, index) => (
                <div key={article.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 sm:p-12 shadow-xl">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest articles, insights, and updates delivered straight to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 bg-background"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-8 bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
