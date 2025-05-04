import { Code, GraduationCap, Braces } from "lucide-react";
import CvPdf from "../../public/CV_Italo_Mangueira__DeveloperFullStack.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Desenvolvedor FullStack</h3>

            <p className="text-muted-foreground">
              Minhas principais características incluem uma forte habilidade
              para resolver problemas complexos, excelente comunicação e
              trabalho em equipe, além de uma constante busca por aprimoramento
              e aprendizado. Possuo vasta experiência com diversas tecnologias,
              incluindo C# .NET Core, ASP.NET MVC, Angular, React, Azure entre
              outras.
            </p>

            <p className="text-muted-foreground">
              Tenho uma sólida experiência em Arquitetura de Microserviços, onde
              aplico princípios de Design Patterns, CleanArchtecture e Padrões
              de Projeto para criar soluções escaláveis e eficientes. Além
              disso, sou proficiente em Arquitetura Event-Driven, utilizando
              ferramentas como Kafka e RabbitMQ para garantir a comunicação
              assíncrona e a alta disponibilidade dos sistemas. Também sigo os
              Princípios SOLID para garantir a manutenibilidade e a
              extensibilidade do código.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Entrar em contato
              </a>

              <a
                href={CvPdf}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Front-End Developer
                  </h4>
                  <p className="text-muted-foreground">
                    Criando sites e aplicações web responsivas com frameworks
                    modernos.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Braces className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Back-End Developer</h4>
                  <p className="text-muted-foreground">
                    Desenvolvendo APIs escaláveis e seguras com foco em
                    performance e manutenção.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cruzeiro Do Sul</h4>
                  <p className="text-muted-foreground">
                    Bacharelado Engenharia de Software Período: 2020 - 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
