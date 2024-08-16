interface NavigationItem {
    name: string
    href?: string
    isActive?: boolean
    subitems?: {
        name: string
        href: string
        isActive?: boolean
    }[]
}

export interface Navigation {
    items: NavigationItem[]
}

export interface EmailTemplate {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}