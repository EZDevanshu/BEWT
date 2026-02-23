async function getStudents (id:string) {
  const res = await fetch(`https://6992a9578f29113acd3e53ed.mockapi.io/students/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function StudentPage({params}:{params:Promise<{id:string}>}) {
    const { id } = await params;
    const students = await getStudents(id);

  return (
    <div>
      <h1>Get User by ID:</h1>
      <p>ID:{students.id}</p>
      <p>name:{students.name}</p>
    </div>
  );
}