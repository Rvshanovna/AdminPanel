export const EmailIcon = () => <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
    >
     <path strokeLinecap="round" strokeLinejoin="round"
         d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>

export const PasswordIcon = () => <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
    >
    <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 11c1.657 0 3-1.343 3-3V6a3 3 0 10-6 0v2c0 1.657 1.343 3 3 3z" />
    <path strokeLinecap="round" strokeLinejoin="round"
        d="M5 11h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z" />
</svg>

export const NameIcon = ({ className = "w-5 h-5" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
    >
      <circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HomeIcon = ({w, h}:{w:number, h:number}) => <svg width={w} height={h} viewBox="0 0 24 24" fill="none">
    <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
    />
</svg>

export const ProductIcon = ({w, h}:{w:number, h:number}) => <svg width={w} height={h} viewBox="0 0 24 24" fill="none">
    <path
        d="M7 7h10v14H7V7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
    />
    <path
        d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
    />
</svg>

export const CategoryIcon = ({w, h}:{w:number, h:number}) => <svg width={w} height={h} viewBox="0 0 24 24" fill="none">
    <path
        d="M4 6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
        stroke="currentColor"
        strokeWidth="1.7"
    />
    <path
        d="M14 14a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4Z"
        stroke="currentColor"
        strokeWidth="1.7"
    />
    <path
        d="M14 6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V6Z"
        stroke="currentColor"
        strokeWidth="1.7"
    />
    <path
        d="M4 16a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
    />
</svg>

export const UsersIcon = ({w, h}:{w:number, h:number}) => <svg width={w} height={h} viewBox="0 0 24 24" fill="none">
    <path
        d="M16 21v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
    />
    <path
        d="M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.7"
    />
    <path
        d="M22 21v-1a4 4 0 0 0-3-3.87"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
    />
    <path
        d="M16 4.13a4 4 0 0 1 0 7.75"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
    />
</svg>

export const ArrowIcon = () => <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
    <path
        d="M15 18 9 12l6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    />
</svg>

export const CloseIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
        d="M18 6 6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
    />
</svg>

