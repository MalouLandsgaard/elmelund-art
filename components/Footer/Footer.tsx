export default function Footer() {
  return (
    <footer className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm font-mono">
      <div>
        <h3 className="font-medium mb-4 uppercase tracking-wider text-xs">education ■</h3>
        <ul className="space-y-4 text-base font-lora">
          <li>
            BA Fine Art, National College of Art and Design, Dublin
          </li>
          <li>
            MA Contemporary Art Practice, Royal College of Art, London
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-medium mb-4 uppercase tracking-wider text-xs">exhibitions ■</h3>
        <ul className="space-y-4 text-base font-lora">
          <li>2023 — “New Perspectives”, Green Gallery, Dublin</li>
          <li>2022 — “Møder”, Kunsthal Charlottenborg, Copenhagen</li>
          <li>2021 — “Form & Feeling”, Galway Arts Centre</li>
        </ul>
      </div>
      <div>
        <h3 className="font-medium mb-4 uppercase tracking-wider text-xs">contact ■</h3>
        <ul className="space-y-4 text-base font-lora">
          <li>
            email:{" "}
            <a
              href="mailto:info@allta.ie"
              className="underline decoration-dotted underline-offset-2 hover:text-[#BA886B] transition-colors"
            >
              info@allta.ie
            </a>
          </li>
          <li>
            instagram:{" "}
            <a
              href="https://instagram.com/allta"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted underline-offset-2 hover:text-[#BA886B] transition-colors"
            >
              @allta
            </a>
          </li>
        </ul>
      </div>
      </div>
    </footer>
  );
}