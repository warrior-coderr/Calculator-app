function cx(...parts: Array<string | undefined | false | null>) {
    return parts.filter(Boolean).join(" ");
}

type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    variant?: "numbers" | "operations" | "functions";
    size?: "sm" | "md" | "lg";
    rounded?: "full";
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    type?: "button" | "submit" | "reset";
};

export default function Button({
    children,
    onClick,
    variant = "numbers",
    size = "lg",
    rounded = "full",
    disabled = false,
    loading = false,
    className,
    type = "button",
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition active:scale-[0.98]";

    const sizes = {
        sm: "h-9 w-9 px-3 text-sm",
        md: "h-12 w-12 px-4 text-base",
        lg: "h-14 w-14 px-6 text-xl",
    } as const;

    const radii = {
        full: "rounded-full",
    } as const;

    const variants = {
        numbers:
            "bg-gray-600 text-white hover:bg-gray-700",
        operations: "bg-yellow-700 text-white hover:bg-yellow-800",
        functions:
            "bg-gray-900 text-white hover:bg-gray-800",
    } as const;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={cx(
                base,
                sizes[size],
                radii[rounded],
                variants[variant],
                disabled || loading ? "opacity-60 cursor-not-allowed" : "",
                className
            )}
        >
            {loading ? "…" : children}
        </button>
    );
}
