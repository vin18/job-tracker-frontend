import { Link } from "react-router-dom";
import { Button } from "./button";

interface ILink {
    id: number,
    href: string;
    linkName: string;
}

const LINKS: ILink[] = [
    {
        id: 0,
        href: '/dashboard',
        linkName: 'Dashboard'
    },
    {
        id: 1,
        href: '/jobs',
        linkName: 'Jobs'
    },
    {
        id: 2,
        href: '/profile',
        linkName: 'Profile'
    }
]

const Sidebar = () => {
    return (
        <div className="h-screen w-screen bg-white dark:bg-slate-900">
            <aside id="sidebar" className="fixed left-0 top-0 z-40 h-screen w-64 transition-transform" aria-label="Sidebar">
                <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900">
                    <Link to="/" className="mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white">
                        <svg className="h-5 w-5 lucide lucide-command" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" /></svg>
                        <span className="ml-3 text-base font-semibold">Job Tracker</span>
                    </Link>
                
                    <ul className="space-y-2 text-sm font-medium">
                        {LINKS.map((link: ILink) => (
                            <li key={link.id}>
                                <Link to={link.href} className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lucide lucide-command" width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                    <span className="ml-3 flex-1 whitespace-nowrap">{link.linkName}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto">
                        <Button className="w-full">Logout</Button>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar;