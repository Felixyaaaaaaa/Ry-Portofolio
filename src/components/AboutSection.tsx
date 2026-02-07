import { motion } from "framer-motion";
import { GraduationCap, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary border border-primary/30 flex items-center justify-center glow-border overflow-hidden">
              <img
                src="Ry-Portofolio/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-lg animate-float" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/5 rounded-lg animate-float" style={{ animationDelay: "-2s" }} />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am <span className="text-primary font-semibold">Felix Yulian Asterino</span>,
              also known as <span className="text-primary font-semibold">RHINNO</span>,
              a Fullstack Developer with a strong interest in backend development.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I enjoy building APIs, managing databases, and creating reliable backend
              systems that support scalable applications.
            </p>

            {/* Education Timeline */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <GraduationCap className="text-primary" />
                Education
              </h3>

              <div className="border-l-2 border-primary/30 pl-6 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[29px] w-4 h-4 bg-primary rounded-full animate-pulse-glow" />
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-primary font-medium">2024 - Present</p>
                    <h4 className="font-semibold">Informatics Engineering</h4>
                    <p className="text-muted-foreground text-sm">
                      Universitas Kristen Teknologi Surakarta (UKTS)
                    </p>
                    <p className="text-muted-foreground text-sm">Faculty of Engineering</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[29px] w-4 h-4 bg-primary/60 rounded-full" />
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-primary font-medium">2022 - 2024</p>
                    <h4 className="font-semibold">Software Engineering</h4>
                    <p className="text-muted-foreground text-sm">
                      SMKN 5 Surakarta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
