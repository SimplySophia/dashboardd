import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import PostsTable from "@/components/posts/PostsTable";

export default function Home() {
  return (
    <>
       <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard 
          title='Posts' 
          value={100} 
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard 
          title='Categories' 
          value={12} 
          icon={<Folder className="text-slate-500" size={72} />}
        />
        <DashboardCard 
          title='Users' 
          value={750} 
          icon={<User className="text-slate-500" size={72} />}
        />
        <DashboardCard 
          title='Comments' 
          value={1200} 
          icon={<MessageCircle className="text-slate-500" size={72} />}
        />
       </div>
       <PostsTable title="Latest Posts" limit={5} />
    </>
  );
}
