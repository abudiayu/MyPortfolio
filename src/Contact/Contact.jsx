import { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import abudyLogo from '../assets/abudy_logo.png';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom'
import "./contact.css"

function Contact() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:abudiayuu@gmail.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => { setOpen(false); setSent(false); setForm({ name: '', email: '', message: '' }); }, 1500);
  };
  return (
    <>
    <div className="footer_wrapper">


    <section className="contact_container">
        <h2 className="contact_heading" onClick={() => setOpen(true)}>
          Lest <span className="luxury_span">Talck</span> 
          <div className="luxury_span_arrow">
          <CallMadeIcon className='arrow_Icon'  style={{ fontSize: 18, marginLeft: 4 }} />
          </div>
        </h2>
    </section>

    {/* ── Email popup modal ── */}
    {open && (
      <div className="modal_overlay" onClick={() => setOpen(false)}>
        <div className="modal_box" onClick={e => e.stopPropagation()}>
          <button className="modal_close" onClick={() => setOpen(false)}><CloseIcon /></button>
          <h3 className="modal_title">Send me a message</h3>
          <p className="modal_sub">I'll get back to you as soon as possible.</p>

          {sent ? (
            <p className="modal_sent"><CheckIcon /> Opening your email client...</p>
          ) : (
            <form className="modal_form" onSubmit={handleSubmit}>
              <input
                className="modal_input"
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              <input
                className="modal_input"
                type="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
              <textarea
                className="modal_textarea"
                placeholder="Your message..."
                required
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
              <button className="modal_send_btn" type="submit">
                <SendIcon style={{ fontSize: 16 }} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    )}

    <section className="footer_icon_wrapper">
      {/* icons row with side lines */}
      <div className="footer_icon_row">
        <span className="footer_line" />
        <div className="footer_icon_container">
          <Link href="https://web.facebook.com/profile.php?id=61579876913486" target="_blank" rel="noopener noreferrer"><FacebookIcon /></Link>
          <Link href="https://www.instagram.com/abdul.qadir0101/" target="_blank" rel="noopener noreferrer"><InstagramIcon /></Link>
          <Link href="https://web.telegram.org/@AbudyTy" target="_blank" rel="noopener noreferrer"><TelegramIcon /></Link>
          <Link href="https://www.linkedin.com/in/abdul-kadir-0b1aa637b/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></Link>
          <Link href="https://github.com/abudiayu" target="_blank" rel="noopener noreferrer"><GitHubIcon /></Link>
          <Link href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></Link>
          <Link href="mailto:abudiayuu@gmail.com"><EmailIcon /></Link>
        </div>
        <span className="footer_line" />
      </div>

      {/* brand name */}
      <div className="footer_logo_wrap">
        <img src={abudyLogo} alt="Abudy Logo" className="footer_logo" />
      </div>

      {/* copyright */}
      <p className="footer_copy">© Copyright reserved to Abdul Qadir</p>
    </section>
        </div>
    </>
  )
}

export default Contact;