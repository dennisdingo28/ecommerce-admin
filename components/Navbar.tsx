import { UserButton, auth } from "@clerk/nextjs"
import { MainNav } from "@/components/Main-Nav"
import StoreSwitcher from "@/components/Store-Switcher"
import { redirect } from "next/navigation"
import prismadb from "@/lib/prismaDb"
import { ThemeToggler } from "@/components/Theme-Toggler"

const Navbar = async () => {
  const {userId} = auth();
  if(!userId)
    redirect('/sign-in');

  const stores = await prismadb.store.findMany({
    where:{
      userId,
    }
  });

  return (
    <div className="border-b">
        <div className="flex h-16 items-center px-4">
            <StoreSwitcher items={stores}/>  
            <MainNav className="mx-6"/>
            <div className="ml-auto flex items-center space-x-4">
                <ThemeToggler/>
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar