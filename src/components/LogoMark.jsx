/**
 * TW monogram mark.
 *
 * Props:
 *   size       – rendered pixel size (default 56)
 *   variant    – "badge"     → blue rounded-square bg + white TW (nav / favicon)
 *                "watermark" → no bg, faint blue TW (hero backdrop)
 *   className  – extra class names
 *   style      – inline styles
 */
const LogoMark = ({ size = 56, variant = 'badge', className = '', style }) => {
    const isBadge = variant === 'badge';

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
            aria-label="TW logo"
        >
            {isBadge && (
                <rect width="56" height="56" rx="11" fill="#2563eb" />
            )}

            <text
                x="28"
                y="38"
                textAnchor="middle"
                fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
                fontWeight="700"
                fontSize="23"
                letterSpacing="-0.5"
                fill={isBadge ? 'white' : '#2563eb'}
                fillOpacity={isBadge ? 1 : 0.22}
            >
                TW
            </text>
        </svg>
    );
};

export default LogoMark;
