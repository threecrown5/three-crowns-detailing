import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

const contactDetails = [
  { label: "Call Or Text", value: "(818) 296-7347", icon: Phone, href: "tel:8182967347" },
  { label: "Email", value: "threecrowns.detailing@gmail.com", icon: Mail, href: "mailto:threecrowns.detailing@gmail.com" },
  { label: "Instagram", value: "@threecrowns.detail", icon: Instagram, href: "https://instagram.com/threecrowns.detail" },
  { label: "Service Area", value: "Glendale, CA & Surrounding Areas", icon: MapPin },
];

export default function ContactPage() {
  return (
    <>
    <PageHeader
      label="CONTACT"
      heading="Get In Touch"
      subtitle="Have a question before booking? Reach out and we'll be happy to help."
    />
    <section className="pb-20 px-6 md:px-20 flex-1 w-full min-w-0 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Details */}
          <div>
            <div className="space-y-8">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-5 group">
                    <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-gold text-xs tracking-[3px] uppercase mb-1 font-semibold">
                        {item.label}
                      </p>
                      <p className="text-lg text-white/90">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                if (item.href) {
                  return (
                    <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                      {content}
                    </a>
                  );
                }

                return <div key={item.label}>{content}</div>;
              })}
            </div>

            <Button
              asChild
              className="mt-12 bg-gold! text-white! px-10 py-3.5 h-auto! tracking-[3px] uppercase text-xs font-semibold hover:bg-gold-soft! transition-all rounded"
            >
              <Link href="/book">Schedule Detail</Link>
            </Button>
          </div>

          {/* Right: Map */}
          <div>
            <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84835.74318049081!2d-118.27430970679536!3d34.199222397635985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c032c8f083a9%3A0xe53fa19efec926a6!2sGlendale%2C%20CA!5e1!3m2!1sen!2sus!4v1772947521983!5m2!1sen!2sus"
                title="Three Crowns Mobile Detailing service area map"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
            <p className="mt-5 text-white/50 text-sm leading-relaxed">
              Proudly serving{" "}
              <strong className="text-white/80">Glendale</strong>,{" "}
              <strong className="text-white/80">Pasadena</strong>,{" "}
              <strong className="text-white/80">Altadena</strong>,{" "}
              <strong className="text-white/80">Burbank</strong>,{" "}
              <strong className="text-white/80">La Ca&ntilde;ada Flintridge</strong>,
              and <strong className="text-white/80">Tujunga</strong>.
            </p>
          </div>
        </div>
    </section>
    </>
  );
}
