const namelist = ['Mwenecho', 'Joshua', 'Harawa'];

export function TestList() {
  return (
    <ul className="necho-list">
      {namelist.map((name, index) => 
        <li key={index}>{name}</li>
      )}
    </ul>
  );
}
