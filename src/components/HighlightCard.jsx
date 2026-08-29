function HighlightCard({
  icon,
  iconColor,
  title,
  value,
  description,
}) {
  return (
    <article className="glass max-h-[155px] max-w-[195px] rounded-3xl p-5">
      <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${iconColor}`}>
          {icon}
        </span>

        <span>{title}</span>
      </div>

      <div className="mt-1 text-[30px] font-medium text-foreground">
        {value}
      </div>

      {/* {progress !== undefined && (
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
      )} */}

      {/* {children} */}

      {description && (
        <p className="mt-4 text-xs text-muted-foreground">
          {description}
        </p>
      )}
    </article>
  );
}

export default HighlightCard;