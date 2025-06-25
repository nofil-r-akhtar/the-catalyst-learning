import './Faculties.css';

const facultyList = [
  {
    name: 'Dr. Ayesha Khan',
    subject: 'Computer Science',
    image: 'https://images.unsplash.com/photo-1586962358070-16a0f05b8e67?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Prof. Imran Siddiqui',
    subject: 'Mathematics',
    image: 'https://images.unsplash.com/photo-1586962358070-16a0f05b8e67?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Dr. Sarah Ali',
    subject: 'Physics',
    image: 'https://images.unsplash.com/photo-1586962358070-16a0f05b8e67?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Mr. Ahmed Raza',
    subject: 'English Literature',
    image: 'https://images.unsplash.com/photo-1586962358070-16a0f05b8e67?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

function Faculties() {
  return (
    <section className="faculties">
      <h2>Meet Our Faculties</h2>
      <div className="faculties__grid">
        {facultyList.map((faculty, index) => (
          <div key={index} className="faculty__card">
            <img src={faculty.image} alt={faculty.name} />
            <h3>{faculty.name}</h3>
            <p>{faculty.subject}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faculties;
