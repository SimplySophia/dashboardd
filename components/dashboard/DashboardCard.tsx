import { Card, CardContent } from "../ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
    icon: React.ReactElement<LucideIcon>;
    title: string;
    value: number;
}
const DashboardCard = ({ icon, title, value }: DashboardCardProps) => {
    return ( 
    <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
        <CardContent>
            <h3 className="text-3xl text-center mb-4 font-bold
            text-slate-500 dark:text-slate-200">
                {title}
            </h3>
        </CardContent>
        <div className="flex gap-5 justify-center items-center">
            {icon}
            <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
                {value}
            </h3>
        </div>
    </Card> 
    );
}
 
export default DashboardCard;