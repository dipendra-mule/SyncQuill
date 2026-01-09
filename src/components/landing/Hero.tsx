import { Button } from '@/components/ui/button';
import { User, Sparkles, Zap, Target, Layers } from 'lucide-react';

const orbitalAvatars = [
  { icon: User, delay: 0, size: 'lg' },
  { icon: Sparkles, delay: 1, size: 'md' },
  { icon: Zap, delay: 2, size: 'sm' },
  { icon: Target, delay: 3, size: 'md' },
  { icon: Layers, delay: 4, size: 'lg' },
  { icon: User, delay: 5, size: 'sm' }
];

const Hero = () => {
  return (
    <section className='section-padding relative overflow-hidden'>
      {/* Ambient glow background */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2' />
        <div className='absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]' />
      </div>

      <div className='container-wide relative'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left content */}
          <div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6'>
              <span className='text-foreground'>Brand-Consistent</span>
              <br />
              <span className='gradient-text'>AI Ghostwriting</span>
              <br />
              <span className='text-foreground'>for Content Agencies</span>
            </h1>
            <p className='text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg'>
              SyncQuillAI helps agencies generate high-quality content while preserving each client's unique writing style and brand voice.
            </p>
            <div className='flex flex-wrap gap-4'>
            <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeyfR_rI7830g8nYlse6wpU-aY4cq-MRcRxYxiYESq1K1xd2Q/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
        >
              <Button
                size='lg'
                className='px-8 py-6 text-base font-medium rounded-full bg-gradient-to-r from-primary to-indigo-500 hover:opacity-90 transition-all duration-300 shadow-glow hover:shadow-glow-lg'>
                Request Access
              </Button>
                </a>
              <Button
                variant='outline'
                size='lg'
                className='px-8 py-6 text-base font-medium rounded-full border-border/50 hover:bg-secondary/50 transition-all duration-300'>
                Learn More
              </Button>
            </div>
          </div>

          {/* Right orbital visual */}
          <div className='relative h-[500px] hidden lg:flex items-center justify-center'>
            {/* Orbital rings */}
            <div className='absolute w-[400px] h-[400px] rounded-full border border-border/30' />
            <div className='absolute w-[300px] h-[300px] rounded-full border border-border/20' />
            <div className='absolute w-[200px] h-[200px] rounded-full border border-border/10' />

            {/* Connection lines */}
            <svg className='absolute inset-0 w-full h-full' viewBox='0 0 500 500'>
              <defs>
                <linearGradient id='lineGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                  <stop offset='0%' stopColor='hsl(262 83% 68%)' stopOpacity='0.3' />
                  <stop offset='100%' stopColor='hsl(238 70% 55%)' stopOpacity='0.1' />
                </linearGradient>
              </defs>
              <path d='M250,100 Q350,200 250,250 Q150,300 250,400' fill='none' stroke='url(#lineGradient)' strokeWidth='1' />
              <path d='M100,250 Q200,150 250,250 Q300,350 400,250' fill='none' stroke='url(#lineGradient)' strokeWidth='1' />
            </svg>

            {/* Central glow */}
            <div className='absolute w-24 h-24 rounded-full bg-primary/20 blur-xl' />
            <div className='relative w-16 h-16 rounded-full glass flex items-center justify-center glow-primary'>
              <Sparkles className='w-7 h-7 text-primary' />
            </div>

            {/* Orbiting avatars */}
            <div className='absolute w-[400px] h-[400px]'>
              {orbitalAvatars.slice(0, 3).map((item, index) => {
                const angle = index * 120 * (Math.PI / 180);
                const x = Math.cos(angle) * 200 + 200;
                const y = Math.sin(angle) * 200 + 200;
                const sizes = { sm: 'w-10 h-10', md: 'w-12 h-12', lg: 'w-14 h-14' };
                const iconSizes = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6' };

                return (
                  <div
                    key={index}
                    className={`absolute ${
                      sizes[item.size as keyof typeof sizes]
                    } glass rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2`}
                    style={{
                      left: x,
                      top: y,
                      animationDelay: `${item.delay * 0.5}s`
                    }}>
                    <item.icon className={`${iconSizes[item.size as keyof typeof iconSizes]} text-muted-foreground`} />
                  </div>
                );
              })}
            </div>

            <div className='absolute w-[300px] h-[300px]'>
              {orbitalAvatars.slice(3, 6).map((item, index) => {
                const angle = (index * 120 + 60) * (Math.PI / 180);
                const x = Math.cos(angle) * 150 + 150;
                const y = Math.sin(angle) * 150 + 150;
                const sizes = { sm: 'w-10 h-10', md: 'w-12 h-12', lg: 'w-14 h-14' };
                const iconSizes = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6' };

                return (
                  <div
                    key={index}
                    className={`absolute ${
                      sizes[item.size as keyof typeof sizes]
                    } glass rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2`}
                    style={{
                      left: x,
                      top: y,
                      animationDelay: `${item.delay * 0.3}s`
                    }}>
                    <item.icon className={`${iconSizes[item.size as keyof typeof iconSizes]} text-muted-foreground`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

