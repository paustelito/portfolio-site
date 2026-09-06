export interface PillToggleOption<T extends string> {
    value: any;
    label: string;
}

export interface PillToggleProps<T extends string> {
    options: PillToggleOption<T>[];
    value: T;
    onChange: (value: T) => void;
    label?: string;
    className?: string;
    textClassName?: string;
}

const PillToggle = <T extends string>({
    options,
    value,
    onChange,
    label,
    className = 'p-0.5',
    textClassName,
}: PillToggleProps<T>) => {
    return (
        <div
            role="tablist"
            aria-label={label}
            className={`flex items-center rounded-md border border-primary bg-black ${className}`}
        >
            {options.map((option) => {
                const selected = option.value === value;
                return (
                    <button
                        key={option.value}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => onChange(option.value)}
                        className={`flex items-center rounded-md font-heading transition-colors px-3 ${textClassName} ${
                            selected ? 'bg-primary text-black' : 'text-gray hover:text-secondary/[0.6]'
                        }`}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
};

export default PillToggle;