import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, // Service ID
        import.meta.env.VITE_TEMPLATE_ID, // Template ID
        {
          name: name,
          email: email,
          message: message, // Template parameters
        },
        import.meta.env.VITE_PUBLIC_KEY // Public Key
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          toast({
            title: "Message sent!",
            description:
              "Thank you for your message. I'll get back to you soon.",
          });
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Failed to send email. Error: ", err);
          toast({
            title: "Error",
            description: "Failed to send email. Please try again later.",
          });
        }
      );
  }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entrar em <span className="text-primary"> Contato</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tem um projeto em mente ou quer colaborar? Entre em contato. Estou
          sempre aberto a discutir novas oportunidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-glow text-foreground">
              {" "}
              Informação de Contato
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="italo.mangueira@hotmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    italo.mangueira@hotmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Numero</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (83) 996463823
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Localização</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Brazil
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-glow text-foreground">
                {" "}
                Redes Sociais
              </h4>
              <div className="flex space-x-4 justify-center">
                <a
                  className=" hover:text-primary transition-colors"
                  href="www.linkedin.com/in/italo-mangueira-6a39b3211"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  className=" hover:text-primary transition-colors"
                  href="https://www.instagram.com/it_tal0/"
                  target="_blank"
                >
                  <Instagram />
                </a>
                <a
                  className=" hover:text-primary transition-colors"
                  href="https://github.com/italomangueira"
                  target="_blank"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 text-glow text-foreground">
              {" "}
              Envie Mensagem
            </h3>

            <form className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Seu Nome
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Italo Mangueira..."
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Seu Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  required
                  value={message}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Olá eu gostaria de falar com você sobre..."
                  rows="2"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button cursor-pointer w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
