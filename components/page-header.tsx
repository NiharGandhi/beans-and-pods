interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
  )
}
