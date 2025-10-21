export default function Footer() {
  return (
    <footer className="py-10 border-t border-black/10 dark:border-white/10">
      <div className="container-x flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-gray-500">
        <div>© {new Date().getFullYear()} AcessSim. Todos os direitos reservados.</div>
        <div className="flex items-center gap-4">
          <a className="link-underline" href="#">Política de Privacidade</a>
          <a className="link-underline" href="#">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
