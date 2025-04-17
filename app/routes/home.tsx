import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta(_args: Route.MetaArgs) {
    return [
        { title: "Kognova Nexus" },
        { name: "description", content: "Centralized Document Repository" },
    ];
}

export function loader({ context }: Route.LoaderArgs) {
    return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
    return <Welcome message={loaderData.message} />;
}
