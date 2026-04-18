type MediaPlaceholderProps = {
  title: string;
  description: string;
};

export function MediaPlaceholder({ title, description }: MediaPlaceholderProps) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-bronze/70 bg-sand p-6">
      <p className="mb-3 inline-block rounded-full bg-bronze px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
        Replace later
      </p>
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-ink/75">{description}</p>
    </div>
  );
}
