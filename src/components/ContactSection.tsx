import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const contactLinks: ContactLink[] = [
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    value: "Felixyaaaaaaa",
    href: "https://github.com/Felixyaaaaaaa",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "felixyulianasterino@gmail.com",
    href: "mailto:felixyulianasterino@gmail.com",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    value: "Felix Yulian A",
    href: "https://www.linkedin.com/in/felix-yulian-a-946051283/",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to
            say hello!
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Links */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:glow">
                      {link.icon}
                    </div>
                    <h3 className="font-semibold mb-1">{link.label}</h3>
                    <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
                      {link.value}
                      <ExternalLink className="w-3 h-3" />
                    </p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>

          {/* Download Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">
              Want to know more about my experience?
            </p>
            <Button
              size="lg"
              className="glow hover:scale-105 transition-transform duration-300"
              onClick={() => {
                const link = document.createElement("a");
                link.href = `${import.meta.env.BASE_URL}Felix Yulian Asterino_Backend Developer.pdf`;
                link.download = "Resume-Felix.pdf";
                link.click();
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
