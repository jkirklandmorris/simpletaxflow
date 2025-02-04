const testimonials = [
  {
    quote: "I love how everything is connected—timesheets turn into invoices, and my tax is auto-calculated. Truly a game-changer!",
    author: "Sophie, Web Developer"
  },
  {
    quote: "I used to dread VAT returns, but now it's all done automatically. No more stress or guesswork!",
    author: "Mark, Graphic Designer"
  },
  {
    quote: "The best part? The integrated assistant that caught a missed tax deduction, saving me hundreds of euros.",
    author: "Anouk, Copywriter"
  },
  {
    quote: "If you're a freelancer in the Netherlands, you NEED this. It's like having an accountant on autopilot.",
    author: "Jeroen, Marketing Consultant"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What our users say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real freelancers who have streamlined their finances with SimpleTaxFlow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-lg"
            >
              <p className="text-muted-foreground mb-4">{testimonial.quote}</p>
              <p className="font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};