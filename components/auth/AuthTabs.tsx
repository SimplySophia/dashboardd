import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs"
import LoginForm from "./LoginForm";
import RegForm from "./RegForm";


const AuthTabs = () => {
    return ( 
        <>
            <Tabs defaultValue="login" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <LoginForm />
                </TabsContent>
                <TabsContent value="register">
                    <RegForm />
                </TabsContent>
            </Tabs>

        </> 
    );
}
 
export default AuthTabs;