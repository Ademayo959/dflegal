import React from "react";
import Image from "next/image";
import herobg from "@/assets/herobg.jpeg"
import herobg2 from "@/assets/herobg2.jpeg"
import herobg3 from "@/assets/herobg3.jpeg"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* --- Navigation --- */}
      <header className="max-w-[1200px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
        <div className="text-sm font-semibold tracking-wider uppercase">
          Dayo Fasehun
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:underline underline-offset-4">Home</a>
          <a href="#" className="hover:underline underline-offset-4">About</a>
          <a href="#" className="hover:underline underline-offset-4">Practice Areas</a>
          <a href="#" className="hover:underline underline-offset-4">Our Team</a>
          <a href="#" className="hover:underline underline-offset-4">Contact</a>
        </nav>
        <a href="#" className="bg-maroon text-cream text-sm font-medium px-6 py-2.5 rounded-full hover:bg-maroon-light transition-colors">
          Request a consultation
        </a>
      </header>

      {/* --- Hero Section --- */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pt-16 pb-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[11px] font-semibold tracking-widest uppercase text-muted block mb-6">
            Legal Practitioners • Nigeria
          </span>
          <h1 className="font-serif text-5xl md:text-[76px] leading-[1.05] tracking-tight mb-8">
            Counsel you can stand behind.
          </h1>
          <p className="text-muted max-w-md mb-10">
            Property, investment, corporate law and compliance, with clear advice and firm advocacy at every stage.
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#" className="bg-maroon text-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-maroon-light transition-colors">
              Book a consultation &rarr;
            </a>
            <a href="#" className="border border-dark px-6 py-3 rounded-full text-sm font-medium hover:bg-black/5 transition-colors">
              Chat on WhatsApp
            </a>
          </div>
          <div className="border-t border-dark/10 pt-6 text-[13px] text-muted tracking-wide">
            Property &middot; Investment &middot; Corporate Law &middot; Compliance
          </div>
        </div>

        {/* Hero Image Arch Placeholder */}
        <div className="relative w-full aspect-[4/5] md:h-[600px] border border-dark/10 rounded-t-full p-3 md:p-4">
  <div className="relative w-full h-full rounded-t-full overflow-hidden">
    <Image
      src={herobg3}
      alt="Legal Counsel Background"
      fill
      className="object-cover object-center"
      priority
    />
  </div>
</div>
      </section>

      {/* --- About Section --- */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-28 grid md:grid-cols-[200px_1fr] gap-10">
        <div>
          <span className="text-[11px] font-semibold tracking-widest uppercase text-muted block pt-2">
            About Us.
          </span>
        </div>
        <div>
          <h2 className="font-serif text-3xl md:text-[44px] leading-[1.3] mb-12">
            We help individuals, investors and businesses make sound decisions and protect what they have built. From property transactions to corporate structuring, we give clear advice, plan carefully and stand firm when it matters.
          </h2>
          <div className="border-t border-dark/10 pt-6 flex justify-end">
            <a href="#" className="border border-dark px-6 py-2 rounded-full text-sm hover:bg-black/5 transition-colors">
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-28">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-muted block mb-6">
          Our Services.
        </span>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h2 className="font-serif text-4xl md:text-[52px] leading-[1.1] max-w-2xl">
            Comprehensive counsel,<br />tailored to your matter.
          </h2>
          <a href="#" className="text-sm underline underline-offset-4 hover:text-muted transition-colors pb-2 font-medium">
            View all practice areas
          </a>
        </div>

        <div className="flex flex-col border-t border-dark/10">
          {/* Service Item 1 */}
          <div className="grid grid-cols-1 md:grid-cols-[50px_100px_1fr_300px_120px] gap-6 items-center py-6 border-b border-dark/10">
            <span className="text-sm text-muted">01</span>
            <div className="bg-placeholder w-[100px] h-[60px] rounded flex items-center justify-center">
               <span className="text-[10px] text-muted">[PHOTO]</span>
            </div>
            <h3 className="font-serif text-2xl font-medium">Property</h3>
            <p className="text-sm text-muted">Acquisitions, title review, conveyancing and disputes, so every property transaction is secure and properly documented.</p>
            <div className="flex md:justify-end">
              <a href="#" className="bg-maroon whitespace-nowrap text-cream px-6 py-2.5 rounded-full text-sm hover:bg-maroon-light transition-colors">Get in touch</a>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="grid grid-cols-1 md:grid-cols-[50px_100px_1fr_300px_120px] gap-6 items-center py-6 border-b border-dark/10">
            <span className="text-sm text-muted">02</span>
            <div className="bg-placeholder w-[100px] h-[60px] rounded flex items-center justify-center">
               <span className="text-[10px] text-muted">[PHOTO]</span>
            </div>
            <h3 className="font-serif text-2xl font-medium">Investment</h3>
            <p className="text-sm text-muted">Legal structuring and due diligence for local and foreign investors, from the first term sheet to a completed deal.</p>
            <div className="flex md:justify-end">
              <a href="#" className="bg-maroon whitespace-nowrap text-cream px-6 py-2.5 rounded-full text-sm hover:bg-maroon-light transition-colors">Get in touch</a>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="grid grid-cols-1 md:grid-cols-[50px_100px_1fr_300px_120px] gap-6 items-center py-6 border-b border-dark/10">
            <span className="text-sm text-muted">03</span>
            <div className="bg-placeholder w-[100px] h-[60px] rounded flex items-center justify-center">
               <span className="text-[10px] text-muted">[PHOTO]</span>
            </div>
            <h3 className="font-serif text-2xl font-medium">Corporate Law</h3>
            <p className="text-sm text-muted">Company formation, governance, contracts and transactions, handled with the care a growing business needs.</p>
            <div className="flex md:justify-end">
              <a href="#" className="bg-maroon whitespace-nowrap text-cream px-6 py-2.5 rounded-full text-sm hover:bg-maroon-light transition-colors">Get in touch</a>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="grid grid-cols-1 md:grid-cols-[50px_100px_1fr_300px_120px] gap-6 items-center py-6 border-b border-dark/10">
            <span className="text-sm text-muted">04</span>
            <div className="bg-placeholder w-[100px] h-[60px] rounded flex items-center justify-center">
               <span className="text-[10px] text-muted">[PHOTO]</span>
            </div>
            <h3 className="font-serif text-2xl font-medium">Compliance</h3>
            <p className="text-sm text-muted">Regulatory advice and ongoing support that keeps your business within the law and ahead of risk.</p>
            <div className="flex md:justify-end">
              <a href="#" className="bg-maroon whitespace-nowrap text-cream px-6 py-2.5 rounded-full text-sm hover:bg-maroon-light transition-colors">Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="bg-maroon text-cream py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-cream/60 block mb-6">
            Our Process.
          </span>
          <h2 className="font-serif text-4xl md:text-[52px] mb-16">
            How we work with you.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="border-t border-cream/20 pt-6">
              <span className="text-sm text-cream/60 block mb-4">01</span>
              <h3 className="font-serif text-2xl font-medium mb-4">Consultation</h3>
              <p className="text-sm text-cream/80 leading-relaxed">You tell us what you are facing. We listen, ask the right questions and tell you honestly what we can do.</p>
            </div>
            <div className="border-t border-cream/20 pt-6">
              <span className="text-sm text-cream/60 block mb-4">02</span>
              <h3 className="font-serif text-2xl font-medium mb-4">Strategy</h3>
              <p className="text-sm text-cream/80 leading-relaxed">We map your options, the risks and the likely cost before you commit to anything.</p>
            </div>
            <div className="border-t border-cream/20 pt-6">
              <span className="text-sm text-cream/60 block mb-4">03</span>
              <h3 className="font-serif text-2xl font-medium mb-4">Execution</h3>
              <p className="text-sm text-cream/80 leading-relaxed">We handle the documents, negotiations and filings with the same care we would give our own.</p>
            </div>
            <div className="border-t border-cream/20 pt-6">
              <span className="text-sm text-cream/60 block mb-4">04</span>
              <h3 className="font-serif text-2xl font-medium mb-4">Resolution</h3>
              <p className="text-sm text-cream/80 leading-relaxed">We stay with you until the matter is closed, and keep you informed all the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Team Section --- */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-28">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-serif text-4xl md:text-[52px]">Meet the team.</h2>
          <a href="#" className="text-sm font-medium underline underline-offset-4 hover:text-muted transition-colors pb-2">
            All attorneys
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="bg-placeholder-dark w-full aspect-[3/4] rounded-lg mb-4 flex items-start p-4">
              <span className="text-[10px] text-muted">[PHOTO]</span>
            </div>
            <h3 className="font-serif text-xl font-medium">Dayo Fasehun</h3>
            <p className="text-sm text-muted">[Title]</p>
          </div>
          <div>
            <div className="bg-placeholder-dark w-full aspect-[3/4] rounded-lg mb-4 flex items-start p-4">
              <span className="text-[10px] text-muted">[PHOTO]</span>
            </div>
            <h3 className="font-serif text-xl font-medium">[Name]</h3>
            <p className="text-sm text-muted">[Title]</p>
          </div>
          <div>
            <div className="bg-placeholder-dark w-full aspect-[3/4] rounded-lg mb-4 flex items-start p-4">
              <span className="text-[10px] text-muted">[PHOTO]</span>
            </div>
            <h3 className="font-serif text-xl font-medium">[Name]</h3>
            <p className="text-sm text-muted">[Title]</p>
          </div>
          <div>
            <div className="bg-placeholder-dark w-full aspect-[3/4] rounded-lg mb-4 flex items-start p-4">
              <span className="text-[10px] text-muted">[PHOTO]</span>
            </div>
            <h3 className="font-serif text-xl font-medium">[Name]</h3>
            <p className="text-sm text-muted">[Title]</p>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section className="bg-maroon text-cream pt-24 pb-12 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            {/* Left Column */}
            <div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-cream/60 block mb-6">
                Contact.
              </span>
              <h2 className="font-serif text-4xl md:text-[56px] leading-[1.1] mb-8">
                Schedule a<br />consultation.
              </h2>
              <p className="text-sm text-cream/80 max-w-sm mb-10">
                Tell us briefly about your matter. We will review your message and get back to you to arrange a time.
              </p>
              <div className="text-sm text-cream/80 space-y-1">
                <p>[PHONE]</p>
                <p>[WHATSAPP NUMBER]</p>
                <p>[EMAIL]</p>
                <p>[OFFICE ADDRESS]</p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-[11px] text-cream/60 mb-2">First name</label>
                    <input type="text" className="w-full bg-transparent border-b border-cream/30 pb-2 text-cream focus:outline-none focus:border-cream transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[11px] text-cream/60 mb-2">Last name</label>
                    <input type="text" className="w-full bg-transparent border-b border-cream/30 pb-2 text-cream focus:outline-none focus:border-cream transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[11px] text-cream/60 mb-2">Email address</label>
                    <input type="email" className="w-full bg-transparent border-b border-cream/30 pb-2 text-cream focus:outline-none focus:border-cream transition-colors" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[11px] text-cream/60 mb-2">Phone or WhatsApp</label>
                  <input type="text" className="w-full bg-transparent border-b border-cream/30 pb-2 text-cream focus:outline-none focus:border-cream transition-colors" />
                </div>

                <div>
                  <label className="block text-[11px] text-cream/60 mb-2">Tell us briefly about your matter</label>
                  <textarea className="w-full bg-transparent border-b border-cream/30 pb-2 text-cream focus:outline-none focus:border-cream transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="bg-gold text-dark px-8 py-3 rounded-full text-sm font-medium hover:bg-[#d4b685] transition-colors">
                  Confirm request &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* --- Giant Watermark Footer (Full Width & Fading) --- */}
        <div className="w-full relative pt-10">
          <h2 className="text-fade-down font-serif text-[17vw] leading-[0.75] tracking-tighter text-cream/[0.15] text-center w-full whitespace-nowrap px-4 select-none">
            Dayo Fasehun
          </h2>
        </div>

        {/* Footer Links (Anchored to bottom) */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-cream/10 pt-8 text-[11px] text-cream/60">
            <p>Dayo Fasehun Legal Practitioners</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-cream transition-colors">About</a>
              <a href="#" className="hover:text-cream transition-colors">Practice Areas</a>
              <a href="#" className="hover:text-cream transition-colors">Our Team</a>
              <a href="#" className="hover:text-cream transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}