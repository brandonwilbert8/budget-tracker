export type DonutValues = {
  monthlyIncome: number;
  wants: number;
  savings: number;
  radius: number;
  strokeWidth: number;
  duration: number;
  color: string;
  delay: number;
};

export type PlanType = {
  wants: number;
  needs: number;
  savings: number;
};

export type CategoryDescriptionProps = {
  planType: PlanType;
  isOverview?: boolean;
};

export type SummaryListItemProps = {
  category: 'savings' | 'wants' | 'needs';
  description: string;
  spent: number;
};
