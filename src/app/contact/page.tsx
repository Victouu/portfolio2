"use client";
import { ValidationError, useForm } from "@formspree/react";
import Head from "../components/head";
import { Input } from "../components/input";

function Contact() {
  const [state, handleSubmit] = useForm("xnqerdbw");
  if (state.succeeded) {
    alert(
      "Merci pour votre message, je vous répondrai dans les plus brefs délais.",
    );
  }
  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="flex min-h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl">
        <Head />
        <div className="mb-20 flex w-full flex-col space-y-8 pt-5">
          {/* Titre */}
          <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left">
            Contact
          </h2>

          {/* Introduction */}
          <div className="w-full p-6 rounded-xl bg-gradient-to-r from-orange-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Disponible pour une embauche en Septembre 2026
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Je recherche un poste de <strong>DevOps Junior</strong> ou{" "}
                <strong>Intégrateur Système</strong>
              </p>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Infos de contact */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Contactez-moi</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  N&apos;hésitez pas à me contacter pour toute opportunité
                  professionnelle ou question.
                </p>

                {/* Coordonnées */}
                <div className="space-y-4">
                  <a
                    href="mailto:rouevictor@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-500 transition-colors group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-900 rounded-lg group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                      <svg
                        className="w-6 h-6 text-orange-600 dark:text-orange-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Email
                      </p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        rouevictor@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <svg
                        className="w-6 h-6 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Téléphone
                      </p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        07.68.09.75.02
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-lg">
                      <svg
                        className="w-6 h-6 text-green-600 dark:text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Localisation
                      </p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Lannion, Bretagne
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire */}
              <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="name">
                      Nom
                    </label>
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      type="text"
                      name="name"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="email">
                      Email
                    </label>
                    <Input
                      id="mail"
                      placeholder="votre@email.com"
                      type="email"
                      name="mail"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="subject">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      placeholder="Sujet de votre message"
                      type="text"
                      name="subject"
                    />
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="flex w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-black dark:text-white rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all min-h-[150px] resize-none"
                      id="message"
                      placeholder="Votre message..."
                      name="message"
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <button
                    className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={state.submitting}
                  >
                    {state.submitting
                      ? "Envoi en cours..."
                      : "Envoyer le message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
