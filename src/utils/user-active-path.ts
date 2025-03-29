import { usePathname } from "next/navigation"

export function useActivePath(): (path: string) => boolean {
    const pathName = usePathname();
    const isActivePath = (path: string) => {
        return path === pathName
    }
    return isActivePath;
}