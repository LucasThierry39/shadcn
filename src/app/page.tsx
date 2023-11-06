import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex flex-row justify-center content-center gap-3"><Avatar>
        <AvatarImage src="https://github.com/LucasThierry39.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h3>Lucas Thierry</h3>
      </div>
    </main>
  );
}
