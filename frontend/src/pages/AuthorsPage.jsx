import { useState, useEffect } from 'react';
import AuthorCard from '@/components/AuthorCard';
import { Input } from '@/components/ui/input';
import { Search, Users } from 'lucide-react';
import { mockAuthors } from '@/data/mockData';

export const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setAuthors(mockAuthors);
    window.scrollTo(0, 0);
  }, []);

  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    author.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    author.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 mb-12 fade-in">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif gradient-text">
              Our Authors
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the talented writers and creators behind Nutri Plus. Each bringing unique perspectives and expertise to our community.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search authors by name, role, or expertise..."
                  className="pl-12 h-12 text-base shadow-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12 fade-in stagger-2">
            <div className="text-center p-4 rounded-lg bg-card shadow-sm">
              <div className="text-3xl font-bold text-primary">{authors.length}+</div>
              <div className="text-sm text-muted-foreground">Expert Authors</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card shadow-sm">
              <div className="text-3xl font-bold text-secondary">50K+</div>
              <div className="text-sm text-muted-foreground">Total Followers</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card shadow-sm">
              <div className="text-3xl font-bold text-accent">200+</div>
              <div className="text-sm text-muted-foreground">Articles Published</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card shadow-sm">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Topics Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Authors Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {filteredAuthors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAuthors.map((author, index) => (
                <div
                  key={author.id}
                  className="fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AuthorCard author={author} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No authors found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16">
        <div className="container mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 sm:p-12 text-center shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
              Want to Become an Author?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our community of talented writers and share your expertise with thousands of readers worldwide.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthorsPage;
