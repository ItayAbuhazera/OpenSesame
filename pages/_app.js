import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <main className="min-h-screen bg-slate-950">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;