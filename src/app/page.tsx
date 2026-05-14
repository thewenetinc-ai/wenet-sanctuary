export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1208, #2c1f12)',
      color: '#f5e8c7',
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#e8c070' }}>
          🔥 Fellowship
        </h1>
        <p style={{ fontSize: '1.4rem', opacity: 0.9 }}>
          Fire Circle Finder
        </p>
      </div>
    </div>
  );
}
