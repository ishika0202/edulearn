import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export function FeatureCard({
  title,
  description,
  variant = "secondary",
  onClick,
}: FeatureCardProps) {
  const baseStyle =
    "cursor-pointer transition-all duration-300 rounded-xl shadow-sm";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-400 hover:text-black",
    secondary: "bg-gray-500 text-white border hover:bg-gray-400 hover:text-black",
  };

  return (
    <div className="p-2 ">
      <Card onClick={onClick} className={cn(baseStyle, variants[variant])}>
        <CardContent className="p-6 text-center">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-xl ">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
