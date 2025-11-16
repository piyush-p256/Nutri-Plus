import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, ArrowLeft, Heart, Bookmark, Share2, Twitter, Linkedin, Mail } from 'lucide-react';
import { mockArticles } from '@/data/mockData';
import { toast } from 'sonner';
import ArticleCard from '@/components/ArticleCard';
import ReactMarkdown from 'react-markdown';

export const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    // Find article by id
    const foundArticle = mockArticles.find(a => a.id === parseInt(id));
    setArticle(foundArticle);

    // Get related articles (same category, different id)
    if (foundArticle) {
      const related = mockArticles
        .filter(a => a.category === foundArticle.category && a.id !== foundArticle.id)
        .slice(0, 3);
      setRelatedArticles(related);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Article not found</p>
      </div>
    );
  }

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? 'Removed from favorites' : 'Added to favorites');
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? 'Removed from reading list' : 'Added to reading list');
  };

  const handleShare = (platform) => {
    toast.success(`Shared on ${platform}`);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-8 -ml-4 hover:bg-muted">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Article Header */}
        <div className="space-y-6 mb-8 fade-in">
          <Badge className="bg-accent text-accent-foreground hover:bg-accent">
            {article.category}
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-foreground leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-muted-foreground">
            {article.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between flex-wrap gap-4 py-6 border-y border-border">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-primary/20">
                <AvatarImage src={article.author.avatar} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                  {getInitials(article.author.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-foreground">{article.author.name}</div>
                <div className="text-sm text-muted-foreground">{article.author.role}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-xl fade-in stagger-2">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Article Actions */}
        <div className="sticky top-24 float-left -ml-20 hidden lg:flex flex-col gap-3 fade-in stagger-3">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full hover:bg-muted ${isLiked ? 'text-red-500' : ''}`}
            onClick={handleLike}
          >
            <Heart className="h-5 w-5" fill={isLiked ? 'currentColor' : 'none'} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full hover:bg-muted ${isSaved ? 'text-accent' : ''}`}
            onClick={handleSave}
          >
            <Bookmark className="h-5 w-5" fill={isSaved ? 'currentColor' : 'none'} />
          </Button>
          <Separator className="my-2" />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-muted"
            onClick={() => handleShare('Twitter')}
          >
            <Twitter className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-muted"
            onClick={() => handleShare('LinkedIn')}
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-muted"
            onClick={() => handleShare('Email')}
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none fade-in stagger-4">
          <div className="text-foreground leading-relaxed">
            <ReactMarkdown
              components={{
              h2: ({ children }) => (
                <h2 className="text-3xl font-bold font-serif mt-12 mb-6 text-foreground">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-bold font-serif mt-8 mb-4 text-foreground">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 my-6 text-muted-foreground">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 my-6 text-muted-foreground">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-muted-foreground text-lg">
                  {children}
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-foreground">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic">
                  {children}
                </em>
              ),
              hr: () => (
                <hr className="my-8 border-border" />
              )
            }}
              >
              {article.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center justify-center gap-4 mt-12 py-6 border-y border-border">
          <Button
            variant="ghost"
            size="sm"
            className={isLiked ? 'text-red-500' : ''}
            onClick={handleLike}
          >
            <Heart className="h-5 w-5 mr-2" fill={isLiked ? 'currentColor' : 'none'} />
            Like
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={isSaved ? 'text-accent' : ''}
            onClick={handleSave}
          >
            <Bookmark className="h-5 w-5 mr-2" fill={isSaved ? 'currentColor' : 'none'} />
            Save
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-5 w-5 mr-2" />
            Share
          </Button>
        </div>

        {/* Author Bio */}
        <Card className="mt-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <Avatar className="h-20 w-20 border-4 border-primary/20">
                <AvatarImage src={article.author.avatar} />
                <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-secondary text-white">
                  {getInitials(article.author.name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-2xl font-bold font-serif mb-2">{article.author.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{article.author.role}</p>
                <p className="text-muted-foreground mb-4">{article.author.bio}</p>
                <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity">
                  Follow
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
          <h2 className="text-3xl font-bold font-serif mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard key={relatedArticle.id} article={relatedArticle} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticlePage;
