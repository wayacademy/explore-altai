import { motion } from 'motion/react';
import type { ReactNode } from 'react';

/** Гүйлгэхэд бага зэрэг дээш хөдөлж орж ирнэ. Агуулга үргэлж харагдаж байдаг (opacity 0 болохгүй). */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li';
}) {
  const Tag = as === 'li' ? motion.li : motion.div;
  return (
    <Tag
      className={className}
      initial={{ y: 22 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  );
}
