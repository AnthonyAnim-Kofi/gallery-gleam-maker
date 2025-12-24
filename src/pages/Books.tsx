import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import bookTyranny from "@/assets/book-tyranny.png";
import dionneMessage from "@/assets/dionne-message.jpg";
import dionneHero from "@/assets/dionne-hero.jpg";

const bookFeatures = [
  "Constantly questions your worth, despite being accomplished on paper.",
  "Feels like you are living on autopilot but doesn't know how to break free.",
  "Has dreams your buried because they felt \"too much\" or \"too late.\"",
  "Is the strong one for everyone else- but silently struggling with burnout and self-doubt.",
  "Is multi-passionate but overwhelmed by the pressure to \"choose one thing.\"",
  "Has a voice, message, or gift inside of her, but fear of visibility keeps you hidden.",
  "Loves God and desires to honor Him, but doesn't know how purpose fits into your everyday life.",
  "Is tired of settling for survival when you were created for significance.",
];

const Books = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Dark Gray */}
      <section className="pt-20 md:pt-24 bg-[hsl(0,0%,30%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide">
                CONQUERING
              </h1>
              <div className="space-y-1">
                <p className="text-white/90 text-lg md:text-xl italic">
                  Overcome what's holding you back.
                </p>
                <p className="text-white/90 text-lg md:text-xl italic">
                  Become who you were born to be.
                </p>
                <div className="w-48 h-1 bg-gradient-to-r from-white/60 to-transparent mt-2" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 10\'%3E%3Cpath d=\'M0,5 Q50,0 100,5 T200,5\' stroke=\'white\' stroke-width=\'2\' fill=\'none\' opacity=\'0.6\'/%3E%3C/svg%3E")' }} />
              </div>
              
              <p className="text-white/80 italic text-sm md:text-base leading-relaxed">
                "This is not just about winning battles—it's about becoming the kind of person who never bows to fear again."
              </p>
              
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Conquering is for the one who's tired of shrinking under pressure, apologizing for her strength, or second-guessing the fire in her soul. This is your permission slip to rise. Whether you're battling fear, doubt, people-pleasing, or perfectionism, this book gives you the tools to break chains and walk boldly into the life that's been calling you.
              </p>
              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md">
                Buy The Book
              </Button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="bg-[hsl(0,0%,85%)] p-8 rounded-lg shadow-2xl">
                <img
                  src={bookTyranny}
                  alt="The Tyranny of the Ordinary"
                  className="w-64 md:w-80 rounded shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retailers Section */}
      <section className="py-6 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Button className="bg-[hsl(45,100%,50%)] hover:bg-[hsl(45,100%,45%)] text-black font-medium px-6 py-2 rounded-full">
              Order Today
            </Button>
            <span className="text-2xl md:text-3xl font-bold text-[hsl(30,100%,25%)]" style={{ fontFamily: 'Arial, sans-serif' }}>
              amazon
            </span>
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-xl font-bold text-[hsl(30,100%,25%)]" style={{ fontFamily: 'Arial, sans-serif' }}>amazon</span>
              <span className="text-[hsl(45,100%,40%)] font-medium text-sm">kindle</span>
            </div>
            <span className="text-lg md:text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="text-[hsl(180,100%,20%)]">BARNES</span>
              <span className="text-[hsl(30,80%,45%)]">&</span>
              <span className="text-[hsl(180,100%,20%)]">NOBLE</span>
            </span>
          </div>
        </div>
      </section>

      {/* Message Section - Dark Gray */}
      <section className="bg-[hsl(0,0%,30%)] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            <div className="flex justify-center lg:justify-start">
              <img
                src={dionneMessage}
                alt="Dionne Tweneboah"
                className="w-72 md:w-96 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-[hsl(45,100%,50%)] font-bold uppercase tracking-wider">
                IT'S NOT TOO LATE.
              </p>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                <span className="text-4xl md:text-5xl">"</span>A Message from Dionne Tweneboah...
              </h2>
              
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  There was a moment when I looked at my life and asked myself a painful question: Is this all there is?
                </p>
                <p>
                  From the outside, things looked fine. But on the inside, I knew I was hiding. I was shrinking, settling, surviving - not thriving.
                </p>
                <p>
                  This book is the answer to that question. It's my love letter to the person who knows they're called to more but feel stuck in cycles of fear, perfectionism, or playing small.
                </p>
                <p>
                  It's for the ones who secretly wonder if it's too late or if they've missed their moment.
                </p>
                <p>
                  <strong className="text-white">It's not too late.</strong> Your purpose didn't expire. The <strong className="text-white">extraordinary</strong> life you crave is still available, and <strong className="text-white">I wrote this to help you reclaim it.</strong>
                </p>
              </div>
              
              <Button variant="outline" className="border-primary text-primary-foreground bg-primary hover:bg-primary/90 px-8 py-3 uppercase tracking-wide">
                Buy The Tyranny of The Ordinary
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Book Is For */}
      <section className="py-16 md:py-24 bg-[hsl(0,0%,95%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
              Who This Book Is For
            </h2>
            <p className="font-heading text-2xl md:text-3xl italic text-muted-foreground" style={{ fontFamily: 'cursive' }}>
              (If You're Wondering...)
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="font-heading text-xl md:text-2xl font-semibold mb-8 text-center text-primary">
              This book is for the one who:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {bookFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="font-bold text-foreground">{index + 1}.</span>
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <p className="text-center mt-12 text-primary font-semibold text-lg">
              If you saw yourself in even one of these... this book was written for you.
            </p>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                About the Author
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Dionne Tweneboah is a bestselling author, transformational speaker, and purpose mentor. Rooted in faith and fueled by a deep passion for women's empowerment, she helps women break free from mediocrity and step into their divine purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through her work, she equips and inspires women all over the globe to conquer their inner chaos and build lives aligned with their calling.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={dionneHero}
                alt="Dionne Tweneboah"
                className="w-64 md:w-80 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Are You Ready to<br />Conquer the Ordinary?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            This book isn't just pages—it's a compass and a mirror, a challenge and a gift, a love letter to your highest self.
          </p>
          <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8">
            Get Your Copy Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Books;
