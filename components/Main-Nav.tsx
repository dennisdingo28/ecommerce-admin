"use client"

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>){
    return (
        <nav className={className}></nav>
    )
}