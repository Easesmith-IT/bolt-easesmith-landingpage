import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      content:
        'The team transformed our Shopify store into a revenue-generating machine. Our conversion rate increased by 42% within the first quarter, and the checkout experience is now seamless.',
      author: 'Sarah Chen',
      role: 'CEO',
      company: 'Luxe Fashion Co.',
    },
    {
      content:
        'Working with this agency was a game-changer. They built a custom software system that eliminated bottlenecks we had been dealing with for years. Our operational efficiency has never been better.',
      author: 'Michael Rodriguez',
      role: 'CTO',
      company: 'TechScale Solutions',
    },
    {
      content:
        'Finally, a development partner who understands business, not just code. They delivered a mobile app that our users love, and the performance is outstanding. Worth every penny.',
      author: 'Jennifer White',
      role: 'VP of Product',
      company: 'FinFlow Inc.',
    },
    {
      content:
        'The automation systems they built saved us hundreds of hours monthly. Their senior engineers understood our complex requirements immediately and delivered a solution that exceeded expectations.',
      author: 'David Park',
      role: 'Operations Director',
      company: 'LogiChain Global',
    },
    {
      content:
        'From strategy to deployment, their process was transparent and professional. They built our marketplace platform to handle scale, and it has been rock-solid since launch.',
      author: 'Amanda Foster',
      role: 'Founder & CEO',
      company: 'ConnectMarket',
    },
    {
      content:
        'Security and compliance were critical for our healthcare platform. The team delivered a HIPAA-compliant system with exceptional UX. Our providers and patients both love using it.',
      author: 'Dr. James Morrison',
      role: 'Chief Medical Officer',
      company: 'HealthBridge Systems',
    },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto tracking-luxury">
            What industry leaders say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                  <Quote size={20} className="text-sky-600" />
                </div>

                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-black">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
