import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";

const UserNav = () => {
    return (
        <div className="ml-auto">
            <Button className="w-fit h-8 " variant={"outline"}>
                <UserIcon />
            </Button>
        </div>
    );
};

export default UserNav;
