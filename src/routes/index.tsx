import { createFileRoute } from "@tanstack/react-router";
import heroBurger from "@/assets/bbb-burgers-real.jpg";
import milkshakes from "@/assets/milkshakes.jpg";
import momos from "@/assets/momos.jpg";
import coffee from "@/assets/coffee.jpg";
import logo from "@/assets/bbb-logo.jpg";
import cart from "@/assets/bbb-cart.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Burger Bliss Bistro — Taste the Bliss · Bhugaon, Pune" },
      { name: "description", content: "Pune's pocket-friendly burger joint in Bhugaon. Juicy burgers, momos, frappes & mocktails from ₹20. 4.9★ on Google. Dine-in · Takeaway · Order online." },
      { property: "og:title", content: "Burger Bliss Bistro — Taste the Bliss" },
      { property: "og:description", content: "4.9★ rated burgers, frappes & momos in Bhugaon, Pune. From ₹20." },
      { property: "og:image", content: "/og-burger.jpg" },
    ],
  }),
  component: Home,
});

const menuSections = [
  {
    name: "Burgers & Sandwiches",
    image: heroBurger,
    items: [
      { n: "Classic Veggie Crunch", p: "60", tag: "★ Bestseller" },
      { n: "Cheese Veggie Crunch", p: "90" },
      { n: "Loaded Paneer Burger", p: "120" },
      { n: "Grilled Sandwich", p: "70" },
    ],
  },
  {
    name: "Momo's",
    image: momos,
    items: [
      { n: "Steamed Veg Momos", p: "60" },
      { n: "Fried Veg Momos", p: "70" },
      { n: "Schezwan Momos", p: "80", tag: "🔥 Spicy" },
      { n: "Cheese Momos", p: "90" },
    ],
  },
  {
    name: "Frappes & Coffee",
    image: coffee,
    items: [
      { n: "Americano", p: "20" },
      { n: "Café Latte", p: "30" },
      { n: "Hazelnut Frappe", p: "70", tag: "★ Loved" },
      { n: "Irish Caramel Frappe", p: "80" },
    ],
  },
  {
    name: "Milkshakes & Mocktails",
    image: milkshakes,
    items: [
      { n: "Oreo Milkshake", p: "70" },
      { n: "Special Milkshake", p: "100", tag: "Chef's pick" },
      { n: "Blue Ocean Mojito", p: "60" },
      { n: "Sparkling Mango Mojito", p: "70" },
    ],
  },
];

const reviews = [
  { name: "Amit Chavan", badge: "Local Guide · 235 reviews", text: "Convenient location on main Paud Road. Grabbed Burger, Wraps and Hot Coffee. Food was awesome and affordable. Run by youngsters Rohan and Sanket." },
  { name: "Deepak Manakar", badge: "Verified diner", text: "The Cheese Veggie Crunch Burger is a perfect balance of fresh, crunchy, and cheesy goodness. Generous melting cheese in every bite." },
  { name: "Simran Kathare", badge: "Local Guide · 12 reviews", text: "The food is cheap but tasty too. Pretty pocket-friendly for a quick and delicious bite. Highly recommend!" },
];

function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="Burger Bliss Bistro logo" width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-2 ring-secondary/40" />
            <span className="font-display text-lg tracking-tight">Burger Bliss<span className="text-primary">.</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#menu" className="hover:text-primary transition">Menu</a>
            <a href="#story" className="hover:text-primary transition">Our Story</a>
            <a href="#reviews" className="hover:text-primary transition">Reviews</a>
            <a href="#visit" className="hover:text-primary transition">Visit</a>
          </div>
          <a href="tel:08805030546" className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground">
            Order: 088050 30546
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="chip">★ 4.9 on Google · 69 reviews</span>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] md:text-8xl">
              Taste<br />
              the <span className="text-primary">Bliss.</span>
            </h1>
            <p className="mt-6 max-w-md font-serif text-2xl leading-snug text-foreground/80">
              Bhugaon's most-loved burger bistro — juicy, cheesy, pocket-friendly. Made fresh by Rohan & Sanket.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/30 transition hover:translate-y-[-2px]">
                See the Menu
              </a>
              <a href="https://maps.google.com/?q=Burger+Bliss+Bistro+Bhugaon" target="_blank" rel="noopener" className="rounded-full border-2 border-secondary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-secondary transition hover:bg-secondary hover:text-secondary-foreground">
                Get Directions
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div><span className="font-display text-2xl text-foreground">₹20+</span><br />starting price</div>
              <div className="h-10 w-px bg-border" />
              <div><span className="font-display text-2xl text-foreground">Till 12am</span><br />open daily</div>
              <div className="h-10 w-px bg-border" />
              <div><span className="font-display text-2xl text-foreground">Est. 2025</span><br />Bhugaon, Pune</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-accent/40 via-primary/20 to-transparent blur-3xl" />
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border-4 border-secondary shadow-2xl">
              <img src={heroBurger} alt="Signature Burger Bliss cheese burger" className="h-full w-full object-cover" width={1536} height={1536} />
            </div>
            <div className="absolute -bottom-6 -left-6 rotate-[-6deg] rounded-2xl bg-secondary px-5 py-3 text-secondary-foreground shadow-xl">
              <div className="font-display text-3xl leading-none">₹60</div>
              <div className="text-xs uppercase tracking-widest opacity-80">Classic Crunch</div>
            </div>
            <div className="absolute -right-4 top-8 rotate-[8deg] rounded-full bg-accent px-4 py-3 text-accent-foreground shadow-xl">
              <div className="font-display text-xl leading-none">FRESH</div>
              <div className="text-[10px] uppercase tracking-widest">Made to order</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker-stripe py-3">
        <div className="flex items-center justify-center gap-8 overflow-hidden font-display text-lg uppercase text-cream">
          <span>🍔 Burgers from ₹60</span>
          <span className="opacity-50">·</span>
          <span>☕ Coffee from ₹20</span>
          <span className="opacity-50">·</span>
          <span>🥤 Frappes from ₹70</span>
          <span className="opacity-50">·</span>
          <span>🥟 Momos · Wraps · Shakes</span>
        </div>
      </div>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="chip">The Menu</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">Crafted with <span className="text-primary">love</span>.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">From street-side classics to indulgent shakes — every order is hand-prepared, fresh, and unbelievably affordable.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {menuSections.map((sec) => (
            <article key={sec.name} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={sec.image} alt={sec.name} loading="lazy" width={1024} height={640} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-display text-3xl text-cream md:text-4xl">{sec.name}</h3>
              </div>
              <ul className="divide-y divide-border px-6">
                {sec.items.map((it) => (
                  <li key={it.n} className="flex items-baseline justify-between gap-4 py-4">
                    <div>
                      <div className="font-semibold">{it.n}</div>
                      {it.tag && <div className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-primary">{it.tag}</div>}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex-1 border-b border-dashed border-border/80" />
                      <span className="font-display text-xl">₹{it.p}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Full menu includes Sides, Wraps, Burgers, Sandwiches, Iced Coffees, Mocktails & more. Prices may vary — please confirm in-store.
        </p>
      </section>

      {/* Story */}
      <section id="story" className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-5 md:py-28">
          <div className="md:col-span-2">
            <span className="chip" style={{ background: "color-mix(in oklab, var(--mustard) 18%, transparent)", color: "var(--mustard)", borderColor: "color-mix(in oklab, var(--mustard) 35%, transparent)" }}>Our Story</span>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">
              Two friends.<br />One little<br />burger cart.
            </h2>
            <div className="mt-8 overflow-hidden rounded-3xl border-4 border-accent/30 shadow-2xl">
              <img src={cart} alt="Burger Bliss Bistro cart on Paud Road, Bhugaon at dusk" width={1280} height={853} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-secondary-foreground/85 md:col-span-3">
            <p>
              <span className="font-display text-2xl text-accent">Burger Bliss Bistro</span> started in 2025 when <strong>Rohan</strong> and <strong>Sanket</strong> set up a small cart on Paud Road, Bhugaon — with one mission: serve genuinely great burgers at prices anyone can afford.
            </p>
            <p>
              No shortcuts. Fresh patties pressed to order, buns toasted on the flat-top, sauces made in-house. Add a frappe or a milkshake, and you've got the Bliss.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { k: "4.9★", v: "Google rating" },
                { k: "69+", v: "Happy reviewers" },
                { k: "₹20–200", v: "Per person" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-display text-4xl text-accent">{s.k}</div>
                  <div className="text-sm uppercase tracking-widest text-secondary-foreground/60">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-14 text-center">
          <span className="chip">★★★★★ 4.9 on Google</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">Loved by locals.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
              <div className="mb-4 text-primary">★★★★★</div>
              <blockquote className="flex-1 font-serif text-xl leading-snug">"{r.text}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{r.badge}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Visit / CTA */}
      <section id="visit" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground">
          <div className="grid gap-10 p-10 md:grid-cols-2 md:p-16">
            <div>
              <span className="chip" style={{ background: "color-mix(in oklab, white 18%, transparent)", color: "white", borderColor: "color-mix(in oklab, white 35%, transparent)" }}>Visit us today</span>
              <h2 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">Come hungry.<br />Leave blissful.</h2>
              <p className="mt-5 max-w-md text-primary-foreground/85">
                Sr No. 270, Paud Road, opposite Lifeline Hospital, near Kaka Halwai Sweets, Bhugaon, Bavdhan, Maharashtra 412115.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:08805030546" className="rounded-full bg-secondary px-6 py-3 text-sm font-bold uppercase tracking-wider text-secondary-foreground transition hover:bg-accent hover:text-accent-foreground">
                  Call 088050 30546
                </a>
                <a href="https://maps.google.com/?q=Burger+Bliss+Bistro+Bhugaon" target="_blank" rel="noopener" className="rounded-full border-2 border-primary-foreground/40 px-6 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-primary-foreground hover:text-primary">
                  Open in Maps
                </a>
              </div>
            </div>
            <div className="grid gap-4">
              {[
                { k: "Hours", v: "Open daily · Closes 12:00 AM" },
                { k: "Dining", v: "Dine-in · Takeaway · Order online" },
                { k: "Price", v: "₹1 – ₹200 per person" },
                { k: "Plus code", v: "GQ24+7G Bhugaon, Maharashtra" },
              ].map((r) => (
                <div key={r.k} className="rounded-2xl bg-primary-foreground/10 p-5 backdrop-blur-sm">
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/60">{r.k}</div>
                  <div className="mt-1 font-display text-xl">{r.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary text-secondary-foreground/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="flex items-center gap-2 font-display text-lg text-secondary-foreground">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">B</span>
            Burger Bliss Bistro
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Burger Bliss Bistro · Bhugaon, Pune · Taste the Bliss.</p>
        </div>
      </footer>
    </div>
  );
}
