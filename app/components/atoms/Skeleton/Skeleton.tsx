import { cn } from "@/app/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-bw border-2 border-border",
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }