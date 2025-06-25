import './RequestDemo.css';

function RequestDemo() {
  const handleClick = () => {
    window.open('https://www.google.com', '_blank'); // opens in new tab
  };

  return (
    <section className="request-demo">
      <button className="demo-button" onClick={handleClick}>
        Request a Demo
      </button>
    </section>
  );
}

export default RequestDemo;
