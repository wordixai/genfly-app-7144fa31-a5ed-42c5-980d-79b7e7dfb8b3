import React from 'react';
import { Zap, Star, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-yellow-400" />
          <span className="text-xl font-bold">ShipFast</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Demo</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Wall of love</a>
        </nav>

        <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-md">
          <span className="text-sm">Press</span>
          <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">L</kbd>
          <span className="text-sm">to see the Leaderboards</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Product of the day badge */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="flex space-x-1">
                <div className="w-1 h-6 bg-yellow-400 rounded-full"></div>
                <div className="w-1 h-6 bg-yellow-400 rounded-full"></div>
                <div className="w-1 h-4 bg-yellow-400 rounded-full mt-1"></div>
                <div className="w-1 h-6 bg-yellow-400 rounded-full"></div>
                <div className="w-1 h-6 bg-yellow-400 rounded-full"></div>
              </div>
              <span className="text-sm">Product of the day</span>
              <div className="flex space-x-1">
                <div className="w-1 h-6 bg-yellow-400 rounded-full"></div>
                <div className="w-1 h-4 bg-yellow-400 rounded-full mt-1"></div>
                <div className="w-1 h-6 bg-yellow-400 rounded-full"></div>
                <div className="w-1 h-6 bg-yellow-400 rounded-full"></div>
                <div className="w-1 h-6 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
            <span className="text-2xl font-bold text-white">2nd</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Ship your startup
            </h1>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              in days, <span className="bg-gray-700 px-4 rounded-lg">not weeks</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
            The NextJS boilerplate with all you need to build your SaaS, AI tool, 
            or any other web app and make your first $ online fast.
          </p>

          {/* CTA Button */}
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg rounded-xl">
            <Zap className="w-5 h-5 mr-2" />
            Get ShipFast
          </Button>

          {/* Discount Banner */}
          <div className="flex items-center space-x-2 text-green-400">
            <Gift className="w-5 h-5" />
            <span className="text-sm">$100 off for the first 7180 customers (10 left)</span>
          </div>

          {/* Social Proof */}
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              <Avatar className="w-10 h-10 border-2 border-gray-700">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-gray-700">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-gray-700">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-gray-700">
                <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" />
                <AvatarFallback>U4</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-gray-700">
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" />
                <AvatarFallback>U5</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-300 font-medium">7170 makers ship faster</span>
          </div>
        </div>

        {/* Right Column - Tech Stack Diagram */}
        <div className="relative">
          {/* Large circular container */}
          <div className="relative w-96 h-96 mx-auto">
            {/* Central circle with gradient border */}
            <div className="absolute inset-0 rounded-full border-2 border-gray-600"></div>
            
            {/* Tech stack items positioned around the circle */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 bg-white text-black px-4 py-2 rounded-lg shadow-lg">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">N</span>
              </div>
              <div className="text-sm">
                <div className="font-semibold">NEXT.js</div>
              </div>
            </div>

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center space-x-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">T</span>
              </div>
              <div className="text-sm">
                <div className="font-semibold">Tailwind</div>
                <div className="text-xs opacity-90">• components</div>
                <div className="text-xs opacity-90">• animations</div>
              </div>
            </div>

            <div className="absolute bottom-16 right-8 flex items-center space-x-3 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="w-8 h-8 bg-purple-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <div className="text-sm">
                <div className="font-semibold">Stripe</div>
                <div className="text-xs opacity-90">Lemon Squeezy</div>
                <div className="text-xs opacity-90">• webhook</div>
                <div className="text-xs opacity-90">• checkout</div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="w-8 h-8 bg-green-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
              <div className="text-sm">
                <div className="font-semibold">MongoDB</div>
                <div className="text-xs opacity-90">Supabase</div>
              </div>
            </div>

            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex items-center space-x-3 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">R</span>
              </div>
              <div className="text-sm">
                <div className="font-semibold">Resend</div>
                <div className="text-xs opacity-90">• DNS records</div>
                <div className="text-xs opacity-90">• avoid spam</div>
              </div>
            </div>

            <div className="absolute top-16 right-12 flex items-center space-x-3 bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="w-8 h-8 bg-teal-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">N</span>
              </div>
              <div className="text-sm">
                <div className="font-semibold">NextAuth</div>
                <div className="text-xs opacity-90">• Google login</div>
                <div className="text-xs opacity-90">• Magic link</div>
              </div>
            </div>

            {/* Bottom text */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center text-gray-400 text-sm">
              + all the boring stuff (SEO tags,<br />
              API calls, customer support)
            </div>
          </div>

          {/* Git clone command */}
          <div className="absolute -bottom-16 right-8 text-yellow-400 font-mono text-sm">
            git clone ship-fast
          </div>
          
          {/* Arrow pointing to git clone */}
          <div className="absolute -bottom-8 right-16">
            <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 14l5-5 5 5z" />
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;