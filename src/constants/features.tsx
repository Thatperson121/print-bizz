import { Printer, Award, Clock, Sparkles } from 'lucide-react';

export const FEATURES = [
  {
    icon: <Printer className="h-8 w-8" />,
    title: 'Epic Quality',
    description: 'High-res prints with insane detail and finish.',
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Custom Builds',
    description: 'Your dream gaming gear, perfectly crafted.',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Quick Spawn',
    description: 'Fast printing and shipping to get you in the game.',
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Pro Finishing',
    description: 'Level 100 post-processing for legendary results.',
  },
] as const;