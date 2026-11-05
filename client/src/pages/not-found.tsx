export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Página não encontrada</h1>
        <p className="text-slate-700 mb-6">O endereço acessado não existe neste portfólio.</p>
        <a
          href="/"
          className="inline-flex items-center justify-center bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors duration-200"
        >
          Ir para o início
        </a>
      </div>
    </main>
  );
}
