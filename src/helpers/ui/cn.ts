import { clsx } from 'clsx';

const cn = (...classes: (string | undefined | false)[]) => clsx(...classes);

export { cn };
