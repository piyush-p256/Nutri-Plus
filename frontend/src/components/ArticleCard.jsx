import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const ArticleCard = ({ article, featured = false }) => {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  if (featured) {
    return (
      <Link to={`/article/${article.id}`}>
        <Card className="overflow-hidden hover-lift border-0 shadow-lg group">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 md:h-full overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground hover:bg-accent">
                {article.category}
              </Badge>
            </div>

            {/* Content */}
            <CardContent className="flex flex-col p-8 justify-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground text-base line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={article.author.avatar} />
                      <AvatarFallback>{getInitials(article.author.name)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-foreground">{article.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/article/${article.id}`}>
      <Card className="overflow-hidden hover-lift border-0 shadow-md group h-full flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground hover:bg-accent text-xs">
            {article.category}
          </Badge>
        </div>

        {/* Content */}
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold font-serif text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border mt-auto">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={article.author.avatar} />
                <AvatarFallback className="text-xs">{getInitials(article.author.name)}</AvatarFallback>
              </Avatar>
              <span className="font-medium">{article.author.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
