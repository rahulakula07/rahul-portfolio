import { motion } from 'framer-motion';

export default function CircleProgress({ skill, value, color }) {
  const radius = 45;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb" // light gray bg circle
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1 }}
        />
      </svg>
      <span className="mt-2 text-sm font-medium dark:text-gray-300 text-center">
        {skill} - {value}%
      </span>
    </div>
  );
}
