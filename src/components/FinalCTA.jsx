import { ArrowRight, Calendar, FileText } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="py-24 lg:py-32 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl animate-glow"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-premium-blue/20 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Ready to Remove
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-premium-blue bg-clip-text text-transparent">
              Growth Bottlenecks?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed tracking-luxury">
            Let's build the systems your business actually needs to scale. No
            fluff, no guesswork—just engineering excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="https://calendly.com/mavyakunal/business-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-100 transition-all font-semibold shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              <Calendar size={20} />
              Book Strategy Call
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all font-semibold flex items-center gap-2">
              <FileText size={20} />
              Get Custom Proposal
            </button>
          </div>

          <div className="pt-12 border-t border-gray-700 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-sky-400">30 Min</p>
                <p className="text-sm text-gray-400">Strategy Call</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-sky-400">48 Hours</p>
                <p className="text-sm text-gray-400">Proposal Delivery</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-sky-400">No Obligation</p>
                <p className="text-sm text-gray-400">Free Consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
