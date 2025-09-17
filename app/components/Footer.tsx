import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#f8faff] to-[#ffffff] text-gray-800 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Contacts */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-[#0055cc]">Contactez-nous</h2>
          <p className="text-sm text-gray-600">
            Votre santé est notre priorité. N’hésitez pas à nous joindre pour
            toute urgence ou prise de rendez-vous.
          </p>
          <div className="space-y-3 text-md">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#0055cc]" />
              <span>+213 770 123 456</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#0055cc]" />
              <span>+213 770 654 321</span>
            </div>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#0055cc] mt-1" />
              <span>
                Clinique Les Sources – Hydra, Alger, Algérie
              </span>
            </div>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#0055cc] mt-1" />
              <span>
                Antenne Médicale – Ouled Moussa, Boumerdès
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#0055cc]" />
              <span>clinique.lessources.officiel@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#0055cc] mb-4">Localisation</h2>
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg border">
            <iframe
              title="Localisation Clinique Les Sources"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.392456349052!2d3.0565782755245756!3d36.73714987125179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad78cc8518cd%3A0xb26a9e95f4e5519!2sClinique%20Les%20Sources!5e0!3m2!1sfr!2sdz!4v1757946880970!5m2!1sfr!2sdz"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer base */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Clinique Les Sources – Tous droits réservés.
      </div>
    </footer>
  );
}
