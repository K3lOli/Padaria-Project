import Feed from "../components/feed/feed";
import Header from "../components/header/header";
import React, { useState, useEffect } from "react";

export default function InitialPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule uma espera de 2 segundos (você pode ajustar isso)
    setTimeout(() => {
      setIsLoading(false); // Esconde a tela de carregamento.
    }, 2000); // Tempo em milissegundos
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center bg-[#F3EFEE]">
          <Header />
          <Feed />
        </div>
      )}
    </div>
  );
}
