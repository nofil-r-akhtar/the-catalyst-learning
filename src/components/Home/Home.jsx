function Home() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#002c7a',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img
        src="/home_pic.png" // Replace with your actual image path
        alt="Centered"
        style={{ maxWidth: '100%', height: '50vh' }}
      />
    </div>
  );
}

export default Home;
