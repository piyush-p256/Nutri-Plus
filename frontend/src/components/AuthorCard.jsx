import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Mail } from 'lucide-react';

export const AuthorCard = ({ author }) => {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="overflow-hidden hover-lift border-0 shadow-md group">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Avatar */}
          <Avatar className="h-24 w-24 border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
            <AvatarImage src={author.avatar} />
            <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-secondary text-white">
              {getInitials(author.name)}
            </AvatarFallback>
          </Avatar>

          {/* Name & Role */}
          <div>
            <h3 className="text-xl font-bold font-serif text-foreground mb-1">
              {author.name}
            </h3>
            <p className="text-sm text-muted-foreground">{author.role}</p>
          </div>

          {/* Bio */}
          <p className="text-sm text-muted-foreground line-clamp-3">
            {author.bio}
          </p>

          {/* Stats */}
          <div className="flex gap-4 text-center pt-2">
            <div>
              <div className="text-xl font-bold text-primary">{author.articles}</div>
              <div className="text-xs text-muted-foreground">Articles</div>
            </div>
            <div className="border-l border-border" />
            <div>
              <div className="text-xl font-bold text-secondary">{author.followers}</div>
              <div className="text-xs text-muted-foreground">Followers</div>
            </div>
          </div>

          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-2 justify-center">
            {author.expertise.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-2 pt-2">
            {author.social.twitter && (
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a href={author.social.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
            )}
            {author.social.linkedin && (
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            )}
            {author.social.email && (
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a href={`mailto:${author.social.email}`}>
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>

          {/* Follow Button */}
          <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity">
            Follow
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthorCard;
