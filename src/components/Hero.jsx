import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl animate-glow"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-premium-blue/10 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 rounded-full text-sm font-medium text-sky-700 border border-sky-100">
            <Sparkles size={16} className="text-sky-500" />
            <span>Elite Technology Engineering</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black tracking-tight leading-tight">
            We Build Systems
            <br />
            <span className="bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
              That Scale Revenue
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-luxury">
            Custom Shopify experiences, intelligent software, and
            high-performance apps engineered for serious growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="https://calendly.com/mavyakunal/business-call"
              target="_blank"
              rel="noopener noreferrer"
              // onClick={() => scrollToSection("cta")}
              className="group px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all font-semibold shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              Book Strategy Call
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="px-8 py-4 bg-white text-black border-2 border-black rounded-xl hover:bg-gray-50 transition-all font-semibold"
            >
              View Case Studies
            </button>
          </div>

          <div className="pt-16">
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-premium-blue/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      200+
                    </div>
                    <div className="text-sm text-gray-400 tracking-luxury">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      ₹50M+
                    </div>
                    <div className="text-sm text-gray-400 tracking-luxury">
                      Revenue Generated
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      98%
                    </div>
                    <div className="text-sm text-gray-400 tracking-luxury">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      15+
                    </div>
                    <div className="text-sm text-gray-400 tracking-luxury">
                      Years Combined
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
