import type { Department } from "../types";

interface Props {
  dept: Department;
}

export default function DeptCard({ dept }: Props) {
  return (
    <section className="dept">
      <h4>{dept.department}</h4>
      <ul>
        {dept.employees.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
