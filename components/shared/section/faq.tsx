import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordion";
import { Button } from "../../ui/button";

const faqs = [
    {
        question: "How does the booking process work?",
        answer: `Browse events, select your desired tickets, and complete checkout with your preferred payment method. You'll receive an email confirmation with your e-tickets immediately after purchase. `,
    },
    {
        question: "Can I use Eventique for both in-person and virtual events?",
        answer: "Absolutely! Eventique supports in-person, virtual, and hybrid events with specialized features for each format to ensure the best experience for all attendees.",
    },
    {
        question: "How do I become an event organizer?",
        answer: `Click the "Become an Organizer" button, complete your profile, and you'll gain access to our comprehensive event management dashboard. No technical knowledge required!`,
    },
    {
        question: "Can I customize the registration process?",
        answer: "Yes, organizers can fully customize registration forms with unlimited custom fields, design the entire checkout flow, and create personalized confirmation emails.",
    },
    {
        question: "Is there a limit to how many events I can create?",
        answer: `No, there's no limit to the number of events you can create as an organizer. Host as many events as you'd like on our platform.`,
    },
    {
        question: "How do I manage check-ins at my event?",
        answer: "Use our mobile app for seamless QR code scanning, or set up dedicated check-in stations with our web interface. You can also enable self-check-in for contactless entry.",
    },
    {
        question: "Can I export my attendee data?",
        answer: "Yes, organizers can export attendee data in various formats including CSV and Excel, perfect for CRM integration or personalized follow-ups.",
    },
    {
        question: "How secure is my data on Eventique?",
        answer: "We use bank-level encryption for all data, comply with GDPR and other privacy regulations, and undergo regular security audits to keep your information safe.",
    },
];

const FAQ = () => {
    return (
        <section id="faq" className="py-24 bg-gradient-to-b from-background to-secondary/20">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>

                    <p className="text-muted-foreground text-lg">
                        Everything you need to know about finding and hosting events
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border rounded-xl overflow-hidden shadow-subtle bg-background"
                            >
                                <AccordionTrigger className="px-6 py-4 hover:bg-secondary/20 transition-colors text-left font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="mt-12 text-center">
                        <p className="text-muted-foreground mb-6">
                            Still have questions? We&apos;re here to help.
                        </p>
                        <Button variant="outline" className="group">
                            Contact our support team
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
