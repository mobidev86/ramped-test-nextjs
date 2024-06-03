interface JobPointProps {
    title : string;
    value : string | number;
}

export const JobPoint = ({title , value} : JobPointProps) => {
  return (
    <li>
      <span className="font-semibold">{title} {": "}</span>
      <span className="">{value}</span>
    </li>
  );
};
