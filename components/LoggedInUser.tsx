import { auth } from "@/auth";

export default async function LoggedInUser() {
    const session = await auth();

    if (!session?.user) return null;

    let image;
    if (session.user.image) {
        image = session.user.image;
    } else {
        image = "placeholder.svg";
    }

    return (
        <div className="flex h-[48px] w-full grow items-center justify-center gap-2">
            <img className="w-10 rounded-full" src={image} alt="User Avatar" />
            <p>{session.user.name}</p>
        </div>
    )
}