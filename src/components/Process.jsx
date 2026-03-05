import { Search, PenTool, Code, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Strategic Discovery',
      description:
        'Deep dive into your business model, goals, and technical requirements. We identify bottlenecks and opportunities for growth.',
    },
    {
      number: '02',
      icon: PenTool,
      title: 'Architecture & UX Design',
      description:
        'Design scalable system architecture and user experiences. Every decision is backed by data and best practices.',
    },
    {
      number: '03',
      icon: Code,
      title: 'Precision Development',
      description:
        'Clean, maintainable code built by senior engineers. Regular updates and transparent communication throughout.',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch & Scale Optimization',
      description:
        'Smooth deployment with comprehensive testing. Continuous monitoring and optimization for peak performance.',
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto tracking-luxury">
            A structured approach that delivers results every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-sky-500 to-transparent -translate-x-3"></div>
              )}

              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-sky-500 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10 h-full">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-bold text-gray-700">{step.number}</span>
                    <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center">
                      <step.icon size={24} className="text-sky-400" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
