import Image from "next/image"

interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  image: string
}

interface TeamSectionProps {
  team: TeamMember[]
}

export function TeamSection({ team }: TeamSectionProps) {
  // If no team members are provided, use default team
  const displayTeam =
    team.length > 0
      ? team
      : [
          {
            id: "1",
            name: "John Smith",
            position: "CEO & Founder",
            bio: "With over 20 years of experience in agricultural trading, John founded Beans and Pods Trading to connect quality producers with global markets.",
            image: "/placeholder.svg?height=300&width=300",
          },
          {
            id: "2",
            name: "Sarah Johnson",
            position: "Chief Operations Officer",
            bio: "Sarah oversees our global supply chain operations, ensuring timely delivery and maintaining our high quality standards.",
            image: "/placeholder.svg?height=300&width=300",
          },
          {
            id: "3",
            name: "Michael Chen",
            position: "Head of International Relations",
            bio: "Michael manages our relationships with producers and clients across Asia, Europe, and South America.",
            image: "/placeholder.svg?height=300&width=300",
          },
          {
            id: "4",
            name: "Elena Rodriguez",
            position: "Quality Assurance Director",
            bio: "Elena ensures all our products meet the highest quality standards and comply with international regulations.",
            image: "/placeholder.svg?height=300&width=300",
          },
        ]

  return (
    <section id="team" className="my-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayTeam.map((member) => (
          <div key={member.id} className="text-center">
            <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-green-600 mb-2">{member.position}</p>
            <p className="text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
