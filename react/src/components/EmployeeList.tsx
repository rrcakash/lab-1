import departments from "../data/employees.json";
import type { Department } from "../types";
import DeptCard from "./DeptCard";

export default function EmployeeList() {
  const data = departments as Department[];

  return (
    <section id="employee-list">
      {data.map((dept) => (
        <DeptCard key={dept.department} dept={dept} />
      ))}
    </section>
  );
}
