import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">Software Engineer & Creative Developer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                ManKas Corporation
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              ManKas Corporation est une agence informatique graphique et design. Nous sommes là pour votre visibilité
              en ligne.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500 bg-transparent"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/shinekyaw" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/shinekyawkyawaung/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:shinekyawkyawaung@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Shine Kyaw Kyaw Aung"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  ManKas Corporation est une agence informatique spécialisée dans le développement web, le design
                  graphique et la création d'identités visuelles. Nous accompagnons nos clients dans leur transformation
                  digitale et leur visibilité en ligne.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Notre équipe d'experts combine créativité et expertise technique pour créer des solutions digitales
                  sur mesure qui répondent aux besoins spécifiques de chaque client.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  De la conception de sites web à la création d'applications mobiles, en passant par l'identité visuelle
                  et le marketing digital, nous offrons un service complet pour votre présence en ligne.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Agence</div>
                    <div className="font-medium">ManKas Corporation</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">moisemanda2000@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Téléphone</div>
                    <div className="font-medium">+2043974037169</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Statut</div>
                    <div className="font-medium text-green-500">Disponible pour nouveaux projets</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">Télécharger notre brochure</Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Développement Web" level={95} />
            <SkillBadge name="Design Graphique" level={90} />
            <SkillBadge name="React/Next.js" level={90} />
            <SkillBadge name="WordPress" level={85} />
            <SkillBadge name="Adobe Creative Suite" level={88} />
            <SkillBadge name="UI/UX Design" level={85} />
            <SkillBadge name="Branding" level={80} />
            <SkillBadge name="Marketing Digital" level={75} />
            <SkillBadge name="E-commerce" level={82} />
            <SkillBadge name="Applications Mobile" level={78} />
            <SkillBadge name="SEO/Référencement" level={70} />
            <SkillBadge name="Gestion de Projet" level={85} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Site Web E-commerce"
              description="Développement d'une plateforme e-commerce complète avec système de paiement intégré et interface d'administration."
              tags={["Next.js", "TypeScript", "Stripe", "MongoDB"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Application Mobile Restaurant"
              description="Application mobile de commande en ligne pour restaurant avec géolocalisation et notifications push."
              tags={["React Native", "Firebase", "Google Maps", "Push Notifications"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Identité Visuelle Complète"
              description="Création d'une identité visuelle complète incluant logo, charte graphique et supports de communication."
              tags={["Adobe Illustrator", "Photoshop", "Branding", "Print Design"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Site Vitrine Corporate"
              description="Site web vitrine moderne et responsive pour une entreprise avec CMS intégré pour la gestion de contenu."
              tags={["WordPress", "PHP", "MySQL", "Responsive Design"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Système de Gestion Interne"
              description="Application web de gestion interne avec tableau de bord, gestion des utilisateurs et reporting."
              tags={["Vue.js", "Laravel", "MySQL", "Chart.js"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Campagne Marketing Digital"
              description="Conception et mise en œuvre d'une campagne marketing digital complète avec supports visuels."
              tags={["Social Media", "Google Ads", "Analytics", "Content Creation"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Téléphone</div>
                    <div className="font-medium">+2043974037169</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">moisemanda2000@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/shinekyaw</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">ManKas</span>
              <span className="text-white">Corp</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} ManKas Corporation. Tous droits réservés.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/shinekyaw" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/shinekyawkyawaung/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:shinekyawkyawaung@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
