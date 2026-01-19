import { useState } from "react";
import Button from "../../components/Button";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(false);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formspree.io/f/xvzzrbqb",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }

  return (
    <section className="bg-brand-primary py-16 px-6 flex justify-center">
      {!sent ? (
        <div className="bg-brand-secondary rounded-2xl w-full max-w-4xl p-8 md:p-12 text-brand-primary">
          {/* Título */}
          <h2 className="text-center mb-8">
            Fale conosco
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="hidden"
              name="_subject"
              value="Contato pelo site BeeLiz"
            />

            {/* Nome */}
            <div>
              <label className="block mb-1 font-medium">
                Seu nome: *
              </label>
              <input
                name="name"
                required
                className="w-full bg-white rounded-lg px-4 py-3 text-brand-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">
                Seu melhor e-mail: *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white rounded-lg px-4 py-3 text-brand-primary"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block mb-1 font-medium">
                Seu WhatsApp:
              </label>
              <input
                name="whatsapp"
                className="w-full bg-white rounded-lg px-4 py-3 text-brand-primary"
              />
            </div>

            {/* Mensagem */}
            <div>
              <label className="block mb-1 font-medium">
                Sua mensagem: *
              </label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full bg-white rounded-lg px-4 py-3 text-brand-primary resize-none"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm text-center">
                Erro ao enviar. Tente novamente.
              </p>
            )}

            <Button type="submit" hoverVariant="bgYellow" className="w-full">
              Enviar mensagem
            </Button>
          </form>
        </div>
      ) : (
        <div className="bg-brand-secondary rounded-2xl w-full max-w-4xl p-12 text-center text-brand-primary">
          <h2 className="mb-4">
            MENSAGEM ENVIADA COM <br /> SUCESSO!
          </h2>
          <p>
            Entraremos em contato em até 48 horas!
          </p>
        </div>
      )}
    </section>
  );
}

export default ContactForm;
