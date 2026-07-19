import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919390720106"; // Your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hi%20DigitalJourney,%20I'm%20interested%20in%20your%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:scale-110 hover:bg-[#1ebe5d] transition-all duration-300 rounded-full p-4 shadow-2xl"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}