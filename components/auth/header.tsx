import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
  title: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const Header = ({ label , title }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>{title}</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
