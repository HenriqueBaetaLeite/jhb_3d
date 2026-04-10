export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4">
      
      <div className="max-w-xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl text-center">
        
        {/* LOGO */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent mb-2">
          JHB 3D
        </h1>

        <p className="text-gray-400 mb-6">
          Impressão 3D Gamer & Personalizados 🎮
        </p>

        {/* HISTÓRIA */}
        <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>
            A JHB 3D nasceu de algo muito especial: a vontade de aprender e crescer juntos.
          </p>

          <p>
            Somos pai e filho construindo um negócio de impressão 3D, criando produtos
            únicos, principalmente para o mundo gamer.
          </p>

          <p>
            Cada peça que produzimos carrega dedicação, aprendizado e a alegria de criar algo do zero.
          </p>

          <p className="text-white font-semibold">
            Mais que produtos, estamos construindo um sonho em família.
          </p>
        </div>

        {/* BOTÕES */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          
          <a
            href="https://instagram.com/jhb3d"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 font-semibold hover:scale-105 transition"
          >
            Ver no Instagram
          </a>

          <a
            href="https://wa.me/5531996326773"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-green-500 font-semibold hover:scale-105 transition"
          >
            Falar no WhatsApp
          </a>

        </div>

      </div>
    </main>
  );
}