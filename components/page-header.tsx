interface PageHeaderProps {
  title: string
  description: string
  backgroundImage?: boolean
}

export function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <div className={`${backgroundImage ? 'bg-cover bg-center h-64' : ''} text-center`}>
      <h1 className={`${backgroundImage ? 'text-slate-200' : ''} text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`}>{title}</h1>
      <p className={`${backgroundImage ? 'text-slate-100' : 'text-gray-600'} mt-4 text-lg max-w-2xl mx-auto`}>{description}</p>
    </div>
  )
}
