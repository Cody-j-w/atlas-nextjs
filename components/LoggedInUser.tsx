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
        <div>
            <img src={image} alt="User Avatar" />
            <p>{session.user.name}</p>
        </div>
    )
}