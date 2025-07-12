import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 text-center ">
      <ContactForm />
      <div className="max-w-6xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} Swasthik
      </div>
    </footer>
  );
};

export default Footer;
